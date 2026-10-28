/*
 * Sprite 56x56 del avatar pixel-art: busto extraido del arte de referencia
 * (pelo enrulado marron con motas, cejas gruesas, sonrisa con dientes,
 * campera roja abierta sobre remera navy). Cada caracter es una clave de
 * PALETTE; '.' es transparente. La clave 'w' (esclera) queda en la capa
 * base y la 'i' (iris) se extrae a una capa aparte que se traslada +-1 px
 * con el cursor; el parpadeo tapa la zona del ojo con CLOSED_EYE.
 */

export const PALETTE: Record<string, string> = {
  O: "#0a0709", // outline casi negro
  H: "#311f11", // pelo base marron oscuro
  h: "#63422c", // pelo luz / motas
  S: "#f3b48c", // piel base
  s: "#c78764", // piel sombra
  d: "#8d6147", // piel sombra profunda
  B: "#28160a", // cejas / pestanas
  w: "#f6e9d6", // esclera
  i: "#28160a", // iris marron (movil)
  t: "#f7ead9", // dientes
  m: "#7d3221", // comisuras boca
  J: "#79232e", // campera roja
  j: "#4d161f", // campera sombra
  T: "#1b2330", // remera navy
};

export const SPRITE_SIZE = 56;

export const SPRITE: string[] = [
  "........................OHHOOOOO........................",
  "......................OOOHHOHHHOOO......................",
  "...................BOOOHHhHHBHHOOOOOO...................",
  ".................OOHHOOHHOHHHHHHHHHHHO..................",
  "................OOHHHHHHHHHHHHHHHHHHHOOO................",
  "...............OOOHHHHhhHHHHHHHHhHHHBHHOO...............",
  "..............OHHHHHHHHHHHhHHHHHHHHHhHHHOOO.............",
  "..............OHHHHHHHHHHHhHHHHHHHHHhHHHOOO.............",
  "..............OHHBHhhHHHhHHHHHHHHhHHHHHHHO..............",
  "..............OHHHHHHHHHOHHHHOHHHHHHhhHHHHO.............",
  ".............OOHHHHHHHOHOHHHHHHHHHHHhhHHHHB.............",
  ".............OHHhhHHHBOOOOOHHHHOOOHHHHHhHHB.............",
  ".............OHHHHHBOOssssOOOOOssOOHHHOHHHO.............",
  "..............OHHHOOhsSSSSsssSsOSsOOOOOHHOO.............",
  "..............OHHOssSSSSSSSSSSOOSSSSssOHHOO.............",
  "..............OhhOsSSSSSSSSSSSSSSSSSSsOBHOO.............",
  "..............OHHOSSSSSSSSSSSSSSSSSSSSsOHOO.............",
  "..............OHHOShBBBBBSSSSSSBBBBBBSsOHO..............",
  "...............OHOHBddddBBSSSSBBddddhBsOHO..............",
  "..............OOOOHdssssBBSSSSBBsssssBsOOO..............",
  ".............OSSOOSSwiiiwSSSSSSwiiiwSSSOOS..............",
  ".............OSSOdSSwiiiwSSSSSSwiiiwSSSOHSs.............",
  ".............OSsBsSSwiiiwSSSSSSwiiiwSSSssss.............",
  ".............OSsssSSSSSSSSSSSSSSSSSSSSSssss.............",
  ".............OSSssSSSSSSSSSSSSSSSSSSSSSsSSs.............",
  "..............OSssSSSSSSSSssssSSSSSSSSSsSS..............",
  "..............OOOOSSSSSSSSssssSSSSSSSSSOOO..............",
  "................OOSSSSSSSSSSSSSSSSSSSSsO................",
  "................OOSSSSSSSSSSSSSSSSSSSSsO................",
  "................OOSSSSSmssssssssmSSSSSsO................",
  "..................dSSSSSmttttttmSSSSSsO.................",
  "...................dSSSSSSSSSSSSSSSSsO..................",
  "...................OsSSSSSssssSSSSSsO...................",
  ".....................sSSSSSSSSSSSSsOO...................",
  ".....................OsSSSSSSSSSSsOO....................",
  "....................OOOOsSSSSSSsOOOOO...................",
  "..................OjjjOsOOOOOOOOsOjjjO..................",
  "................OOjjjjOssssssssssOjjjjO.................",
  "................OOJJjjOssssssssssOjjJJJO................",
  "...............OOjJJJjOssSSSSSSssOjJJJJjOO..............",
  ".............OOOOjJJJOOsSSSSSSSSsOOJJJJjOOO.............",
  "...........OOOJJjOJJJOOOSSSSSSSSOOOJJJJOjJjOO...........",
  "..........OjjJJJjOjJJJOTOSSSSSSOTOJJJJOOJJJJjO..........",
  ".........OjjJJJJJJjJJJOTTOOOOOOTTOJJJJOJJJJJjjO.........",
  ".........OJJJJJJJJjjJJOTTTTTTTTTTOJJJjOJJJJJJJOO........",
  "........OJJJJJJJJJjjJJOTTTTTTTTTTOJJjjJJJJJJJJJO........",
  ".........JJJJJJJJJOjJJOTTTTTTTTTTOJJjOJJJJJJJJJJ........",
  ".........jJJJJJJJJJjJJJOTTTTTTTTOJJJOJJJJJJJJJJ.........",
  "..........jJJJjJJJJjjJJOTTTTTTTTOJJjOJJJJJjJJj..........",
  "............JJjJJJJJjJJOTTTTTTTTOJJjJJJJJJjJJ...........",
  ".............JjJJJJJjJJOTTTTTTTTOJJjJJJJJJj.............",
  "..............jjJJJJjJJOTTTTTTTTOJJjJJJJjj..............",
  "..................JJjJJOOOOOOOOOOJJjJJ..................",
  "...................jjJJOOOOOOOOOOJJJJ...................",
  "...................................j....................",
  "........................................................",
];

/*
 * Zona de cada ojo (rect de esclera 5x3) y frame de parpadeo: piel sobre
 * todo el rect + linea de pestana en "U" (ojos cerrados contentos).
 * La capa de pupilas (i) puede desplazarse +-1 px sin salir del blanco
 * horizontal; vertical queda sobre sombra/piel, como un vistazo.
 */
export const EYE_RECTS = [
  { x: 20, y: 20 },
  { x: 31, y: 20 },
] as const;

export const CLOSED_EYE: string[] = [
  "SSSSS",
  "BSSSB",
  "SBBBS",
];

const MOVABLE_KEYS = new Set(["i"]);
const cell = (x: number, y: number) => `M${x} ${y}h1v1h-1z`;

export interface SpritePaths {
  /** paths por clave para todo el sprite menos las pupilas moviles */
  base: Record<string, string>;
  /** paths por clave solo de i (se transladan con la mirada) */
  pupils: Record<string, string>;
  /** paths por clave del frame de ojos cerrados (parpadeo) */
  closed: Record<string, string>;
  /** un solo path con todos los pixeles opacos (copias del glitch) */
  mono: string;
}

const push = (acc: Record<string, string[]>, key: string, x: number, y: number) => {
  (acc[key] ??= []).push(cell(x, y));
};

const joinAll = (acc: Record<string, string[]>) =>
  Object.fromEntries(Object.entries(acc).map(([k, v]) => [k, v.join("")]));

export const buildSpritePaths = (): SpritePaths => {
  const base: Record<string, string[]> = {};
  const pupils: Record<string, string[]> = {};
  const mono: string[] = [];

  SPRITE.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (ch === ".") return;
      mono.push(cell(x, y));
      push(MOVABLE_KEYS.has(ch) ? pupils : base, ch, x, y);
    });
  });

  const closed: Record<string, string[]> = {};
  for (const eye of EYE_RECTS) {
    CLOSED_EYE.forEach((row, dy) => {
      [...row].forEach((ch, dx) => {
        if (ch !== ".") push(closed, ch, eye.x + dx, eye.y + dy);
      });
    });
  }

  return { base: joinAll(base), pupils: joinAll(pupils), closed: joinAll(closed), mono: mono.join("") };
};

export const SPRITE_PATHS = buildSpritePaths();
