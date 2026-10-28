import { useEffect, useRef } from "react";

/*
 * Rafagas de glitch (~320ms cada 6-8s, al azar) sobre el elemento
 * referenciado: solo mientras esta visible en viewport (>=50%) y con la
 * pestaña activa. Con prefers-reduced-motion no se programa nada — el
 * estado estatico queda a cargo del CSS.
 */
export const useGlitchBursts = <T extends HTMLElement>(enabled = true) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    let inView = false;
    let timer = 0;

    const fire = () => {
      el.classList.remove("is-glitching");
      void el.offsetWidth; // reinicia la animación de las copias
      el.classList.add("is-glitching");
      window.setTimeout(() => el.classList.remove("is-glitching"), 360);
    };

    const schedule = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        fire();
        schedule();
      }, 6000 + Math.random() * 2000);
    };

    const sync = () => {
      if (inView && document.visibilityState === "visible") {
        fire();
        schedule();
      } else {
        window.clearTimeout(timer);
      }
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.5 }
    );
    const onVisibility = () => sync();

    io.observe(el);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearTimeout(timer);
    };
  }, [enabled]);

  return ref;
};
