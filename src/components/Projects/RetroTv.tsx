import type { ReactNode, Ref } from "react";

interface RetroTvProps {
  /** Canal 1-based que se muestra en la etiqueta del deck ("CH nn"). */
  channel: number;
  /** Flag latcheado de "primera vez en viewport": enciende LED, etiqueta y glow de pantalla. */
  powered: boolean;
  /** Ref para el observer de autoplay (useInView) sobre el área de pantalla. */
  screenRef?: Ref<HTMLDivElement>;
  children: ReactNode;
}

/*
 * TV retro dibujada con CSS para las cards de /projects: reemplaza la foto
 * tv.png por un gabinete flat/pixel coherente con las .px-card (misma
 * clip-path escalonada de 3 pasos) y la paleta navy + acento.
 *
 * Estructura (todo en flujo, sin posiciones mágicas):
 *  - .rtv-antenna:  dos varillas en V sobre el gabinete.
 *  - .rtv-body:     gabinete con esquinas pixeladas (borde via background +
 *                   ::before inset 1px, misma técnica que .px-card).
 *  - .rtv-bezel:    bisel interior oscuro que empotra el tubo.
 *  - .rtv-screen:   pantalla 16:9 (aspect-ratio) con leve curvatura; acá
 *                   vive el <CrtScreen> con el video/imagen.
 *  - .rtv-deck:     panel inferior con etiqueta "CH nn", rejilla de
 *                   parlante, 2 perillas y LED de power (todo aria-hidden).
 *  - .rtv-feet:     patitas trapezoidales.
 *
 * El acento por canal entra como --rtv-accent desde la card padre; se usa
 * en el LED, la etiqueta CH y el glow de la pantalla encendida.
 */
export const RetroTv = ({ channel, powered, screenRef, children }: RetroTvProps) => {
  return (
    <div className={powered ? "rtv is-on" : "rtv"}>
      <div className="rtv-antenna" aria-hidden="true">
        <i />
        <i />
      </div>
      <div className="rtv-body">
        <div className="rtv-bezel">
          <div className="rtv-screen" ref={screenRef}>
            {children}
          </div>
        </div>
        <div className="rtv-deck" aria-hidden="true">
          <span className="rtv-ch">CH {String(channel).padStart(2, "0")}</span>
          <div className="rtv-grille" />
          <div className="rtv-knobs">
            <i />
            <i />
          </div>
          <span className="rtv-led">PWR</span>
        </div>
      </div>
      <div className="rtv-feet" aria-hidden="true">
        <i />
        <i />
      </div>
    </div>
  );
};
