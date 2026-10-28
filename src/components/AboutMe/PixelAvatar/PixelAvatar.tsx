import { useRef } from "react";
import { PALETTE, SPRITE_PATHS, SPRITE_SIZE } from "./sprite";
import { useBlink, useEyeTracking } from "./hooks";

/*
 * Busto pixel-art 56x56 dentro del aro del hero, extraido del arte de
 * referencia. El sprite se dibuja como paths de 1px (shape-rendering
 * crispEdges) escalados por viewBox:
 *  - capa base: todo el sprite menos las pupilas
 *  - capa .pa-pupils: iris; los hooks la trasladan +-1px con el cursor
 *  - capa .pa-eyes-closed: frame de parpadeo que tapa la zona del ojo
 *  - grupo .pa-bob: "respiracion" de 1px en steps() via CSS
 * Las copias de glitch (cyan/magenta) las compone el padre con SPRITE_PATHS.mono.
 */
export const PixelAvatar = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const pupilsRef = useRef<SVGGElement | null>(null);
  useEyeTracking(svgRef, pupilsRef);
  useBlink(svgRef);

  return (
    <svg
      ref={svgRef}
      className="pa-svg"
      viewBox={`0 0 ${SPRITE_SIZE} ${SPRITE_SIZE}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label="Mauricio Ríos (pixel art)"
    >
      <g className="pa-bob">
        {Object.entries(SPRITE_PATHS.base).map(([key, d]) => (
          <path key={key} d={d} fill={PALETTE[key]} />
        ))}
        <g ref={pupilsRef} className="pa-pupils">
          {Object.entries(SPRITE_PATHS.pupils).map(([key, d]) => (
            <path key={key} d={d} fill={PALETTE[key]} />
          ))}
        </g>
        <g className="pa-eyes-closed" aria-hidden="true">
          {Object.entries(SPRITE_PATHS.closed).map(([key, d]) => (
            <path key={key} d={d} fill={PALETTE[key]} />
          ))}
        </g>
      </g>
    </svg>
  );
};

/* Silueta monocroma del sprite para el split RGB del glitch. */
export const PixelAvatarCopy = ({ fill }: { fill: string }) => (
  <svg
    viewBox={`0 0 ${SPRITE_SIZE} ${SPRITE_SIZE}`}
    shapeRendering="crispEdges"
    aria-hidden="true"
    focusable="false"
  >
    <path d={SPRITE_PATHS.mono} fill={fill} />
  </svg>
);
