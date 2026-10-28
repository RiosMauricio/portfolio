import { useEffect } from "react";

/*
 * Fondo fijo del sitio: degradé azul-noche + auroras que derivan lento +
 * grilla de puntos + spotlight que sigue al cursor actualizando las vars
 * CSS --mx/--my con un único listener (throttle por requestAnimationFrame)
 * + scanlines CRT y grano estático. En touch (pointer: coarse) la capa de
 * spotlight no se pinta, y con prefers-reduced-motion no se trackea el
 * mouse ni se mueven las auroras, quedando todo estático.
 */
export const BackgroundFx = () => {
  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let raf = 0;
    const onMouseMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const root = document.documentElement.style;
        root.setProperty("--mx", `${e.clientX}px`);
        root.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="bg-fx bg-fx-base" aria-hidden="true" />
      <div className="bg-fx bg-fx-aurora bg-fx-aurora-a" aria-hidden="true" />
      <div className="bg-fx bg-fx-aurora bg-fx-aurora-b" aria-hidden="true" />
      <div className="bg-fx bg-fx-aurora bg-fx-aurora-c" aria-hidden="true" />
      <div className="bg-fx bg-fx-grid" aria-hidden="true" />
      <div className="bg-fx bg-fx-spot" aria-hidden="true" />
      <div className="bg-fx bg-fx-scan" aria-hidden="true" />
      <div className="bg-fx bg-fx-grain" aria-hidden="true" />
    </>
  );
};
