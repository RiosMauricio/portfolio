import type { ReactNode } from "react";

interface CrtScreenProps {
  /** Numero de canal del OSD (1-based) que se muestra arriba a la izquierda. */
  channel: number;
  /** Flag latcheado de "primera vez en viewport": dispara el power-on una sola vez. */
  powered: boolean;
  children: ReactNode;
}

/*
 * Tubo CRT para los TVs de /projects. Capas (de fondo a frente):
 *  - .crt-power:  pantalla blanca de fosforo; con .is-on crece desde una
 *    linea horizontal fina (~350ms) y queda debajo del media.
 *  - .crt-media:  el video/iframe/imagen; entra ~600ms despues del power-on.
 *  - .crt-static: rafaga de ruido (feTurbulence SVG) durante el cambio de canal.
 *  - .crt-fx:     scanlines + vineta + brillo de pantalla, siempre activos.
 *  - .crt-osd:    etiqueta "CH nn" en font-pixel; se desvanece y vuelve al hover.
 * Todas las capas excepto el media usan pointer-events:none para que los
 * controles nativos del video sigan siendo clicables.
 */
export const CrtScreen = ({ channel, powered, children }: CrtScreenProps) => {
  return (
    <div className={powered ? "crt-screen is-on" : "crt-screen"}>
      <div className="crt-power" aria-hidden="true" />
      <div className="crt-media">{children}</div>
      <div className="crt-static" aria-hidden="true" />
      <div className="crt-fx" aria-hidden="true" />
      <span className="crt-osd" aria-hidden="true">
        CH {String(channel).padStart(2, "0")}
      </span>
    </div>
  );
};
