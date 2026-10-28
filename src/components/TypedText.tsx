import { CSSProperties, useEffect, useState } from "react";

interface TypedTextProps {
  text: string;
  className?: string;
}

/*
 * Linea "tipeada" estilo terminal: el texto completo vive en el DOM
 * desde el primer render (lectores de pantalla lo leen entero); el
 * clip-path en steps(--chars) lo revela un caracter por paso (~40ms) y
 * el caret de bloque queda parpadeando al final. Sin JS el texto se ve
 * completo (la regla de ocultado exige `.js`) y con reduced-motion se
 * monta directo en el estado final con caret estatico.
 */
export const TypedText = ({ text, className }: TypedTextProps) => {
  const [phase, setPhase] = useState<"pre" | "typing" | "typed">("pre");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("typed");
      return;
    }
    setPhase("typing");
    const done = window.setTimeout(
      () => setPhase("typed"),
      text.length * 40 + 150
    );
    return () => window.clearTimeout(done);
  }, [text]);

  const classes = [
    "hud-type",
    phase === "typing" && "is-typing",
    phase === "typed" && "is-typed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      style={{ "--chars": text.length } as CSSProperties}
    >
      <span className="ht-copy">{text}</span>
      <span className="hud-caret" aria-hidden="true" />
    </span>
  );
};
