import { useEffect, type RefObject } from "react";

/*
 * Vida del avatar pixel-art:
 * - useEyeTracking: las pupilas siguen el cursor en 8 direcciones (pasos de
 *   1px sobre el viewBox, siempre enteros). Un solo listener de mousemove
 *   throtteado por rAF; tras ~2s sin moverse vuelve al centro. En equipos
 *   tactiles no hay cursor: cada tanto pega una mirada lateral al azar.
 * - useBlink: parpadeo cada 3-6s (frame de ojos cerrados ~120ms) agregando
 *   la clase .pa-blink en el SVG raiz; el CSS la traduce en capas.
 * Ambos se desactivan con prefers-reduced-motion (sprite estatico, mirada
 * al centro).
 */

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const coarsePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: coarse)").matches;

const IDLE_MS = 2000;
const DEAD_ZONE = 44; // px de pantalla: el cursor "sobre" el avatar no mueve la mirada

export const useEyeTracking = (
  svgRef: RefObject<SVGSVGElement | null>,
  pupilsRef: RefObject<SVGGElement | null>
) => {
  useEffect(() => {
    const svg = svgRef.current;
    const pupils = pupilsRef.current;
    if (!svg || !pupils || reduceMotion()) return;

    const apply = (dx: number, dy: number) => {
      pupils.setAttribute("transform", `translate(${dx} ${dy})`);
    };

    if (coarsePointer()) {
      // Miradas idle: cada 4-7s un vistazo lateral breve y vuelta al centro.
      const dirs: Array<[number, number]> = [
        [-1, 0], [1, 0], [-1, -1], [1, -1], [-1, 1], [1, 1],
      ];
      let glance = 0;
      let back = 0;
      const schedule = () => {
        glance = window.setTimeout(() => {
          const [dx, dy] = dirs[Math.floor(Math.random() * dirs.length)];
          apply(dx, dy);
          back = window.setTimeout(() => apply(0, 0), 700 + Math.random() * 300);
          schedule();
        }, 4000 + Math.random() * 3000);
      };
      schedule();
      return () => {
        window.clearTimeout(glance);
        window.clearTimeout(back);
      };
    }

    let raf = 0;
    let idle = 0;
    let mx = 0;
    let my = 0;

    const read = () => {
      raf = 0;
      const r = svg.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const vx = mx - cx;
      const vy = my - cy;
      if (Math.hypot(vx, vy) < DEAD_ZONE) {
        apply(0, 0);
        return;
      }
      const a = Math.atan2(vy, vx);
      apply(Math.round(Math.cos(a)), Math.round(Math.sin(a)));
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(read);
      window.clearTimeout(idle);
      idle = window.setTimeout(() => apply(0, 0), IDLE_MS);
    };

    const reset = () => {
      window.clearTimeout(idle);
      idle = window.setTimeout(() => apply(0, 0), IDLE_MS);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", reset);
    window.addEventListener("blur", reset);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", reset);
      window.removeEventListener("blur", reset);
      window.clearTimeout(idle);
      cancelAnimationFrame(raf);
    };
  }, [svgRef, pupilsRef]);
};

const BLINK_MS = 120;
const BLINK_MIN = 3000;
const BLINK_VAR = 3000;

export const useBlink = (svgRef: RefObject<SVGSVGElement | null>) => {
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || reduceMotion()) return;

    let timer = 0;
    let open = 0;

    const fire = () => {
      svg.classList.add("pa-blink");
      open = window.setTimeout(() => svg.classList.remove("pa-blink"), BLINK_MS);
    };

    const schedule = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        if (document.visibilityState === "visible") fire();
        schedule();
      }, BLINK_MIN + Math.random() * BLINK_VAR);
    };

    schedule();
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(open);
      svg.classList.remove("pa-blink");
    };
  }, [svgRef]);
};
