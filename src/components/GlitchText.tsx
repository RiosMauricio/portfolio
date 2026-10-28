import type { ReactNode } from "react";
import { useGlitchBursts } from "@/hooks/useGlitchBursts";

interface GlitchTextProps {
  text: string;
  /** Activa rafagas periodicas mientras el elemento esta visible (hero). */
  auto?: boolean;
  className?: string;
  /** Contenido base opcional (p.ej. spans con color); las copias ::before/::after
      siempre repiten `data-text` plano. */
  children?: ReactNode;
}

/*
 * Texto con glitch: el span base nunca se mueve (siempre legible);
 * ::before/::after (index.css) repiten `data-text` en cyan y magenta
 * durante las rafagas. Sin `auto` el glitch solo sale en :hover.
 * Las copias llevan alt vacio (`content: ... / ""`) y el texto se lee
 * una sola vez en el arbol de accesibilidad.
 */
export const GlitchText = ({ text, auto = false, className, children }: GlitchTextProps) => {
  const ref = useGlitchBursts<HTMLSpanElement>(auto);
  return (
    <span ref={ref} className={className ? `glitch ${className}` : "glitch"} data-text={text}>
      {children ?? text}
    </span>
  );
};
