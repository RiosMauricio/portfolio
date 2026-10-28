# CRT TVs + pixel-corner info cards — worker report

Scope executed: `/projects` CRT TV screens + About-page info cards
(pixel corners, arcade tabs, background-fit pass). No new deps, no commits.

## What changed

### 1. Project videos = CRT TVs

New `src/components/CrtScreen.tsx` renders the media inside a layer stack
(pointer-events: none on every FX layer — `elementFromPoint` over a screen
hits the `VIDEO` element, so native controls stay clickable):

- `.crt-fx` — permanent "glass": dark scanlines (1px/3px), radial vignette,
  top sheen, inset glow.
- `.crt-power` — phosphor-white screen that runs `crt-power-on` 350ms
  (thin horizontal line expands full screen) the FIRST time the card
  enters the viewport (`powered` state latched in `ProjectsList`).
- `.crt-static` — 320ms TV-static burst (inline feTurbulence SVG noise,
  stepped jitter, no video files) right after power-on, before the media.
- `.crt-media` — fades in ~600ms on a black base over the white phosphor
  layer (works for mp4, the YouTube iframe, and the pomoplane still).
- `.crt-osd` — "CH 01"…"CH 07" in `var(--font-pixel)`, green `#8fff9e`
  with glow, top-left; fades after ~2.4s and reappears on hover.
  First keyframe is `opacity:0` so the backwards fill doesn't show it early.
  (Same fix applied to the static burst — previously visible during the
  power line because `both` fill painted the first keyframe during delay.)

Timeline: 0→350ms line expand · 350–670ms static · 600–780ms media in ·
620ms–3s OSD. Reduced-motion: `power`/`static` hidden, `media` opacity 1,
OSD static — verified zero running animations in an emulated
`prefers-reduced-motion` context (`projects-rm.png`).

### 2. Info cards (About)

`.px-card` system in `AboutMe.css`, applied to `PersonalInfo`,
`Formation`, and each `Tabs.Content` panel (`.px-card--panel` recessed
variant) — covers WorkExp/Education/Skills/Contact consistently:

- Pixel corners: 3 steps × 4px via `clip-path: polygon()` on the card
  (painted in the border color) + `::before` inset 1px repeating the
  same clip → a real 1px stepped hairline border.
- `.px-kicker` (10px) and `.px-title` use `var(--font-pixel)`;
  paragraphs stay Quicksand. No skill bars, no text effects.
- Formation tabs = arcade menu: `var(--font-pixel)` labels, active tab
  shows `▶` via `::after{order:-1}` (Chakra already uses `::before` as
  its selected underline — recolored to accent + glow), muted others,
  `:focus-visible` outline kept.

### 3. Background fit analysis (required)

Finding: the site renders Chakra in **light** color mode, so the cards
were `bg.panel` ≈ near-white boxes floating on the night-blue aurora —
the spec's "flat grey boxes" diagnosis confirmed (see first-run state).
Fixed surface: `rgba(11,20,44,0.62)` + `backdrop-filter: blur(12px)
saturate(1.15)` + 1px stepped hairline + faint inner scanline
(2%/4px). Measured surface (pixel-sampled, blur ON): **#0b1329**.

Measured WCAG AA contrast (computed text colors vs. measured surface):

| text                     | color     | ratio   | AA (≥4.5) |
|--------------------------|-----------|---------|-----------|
| body `.paragraph` gray.300 | `#d4d4d8` | 12.47:1 | pass      |
| captions / list items      | `#c7d0df` | 11.86:1 | pass      |
| titles                     | `#eef3fc` | 16.55:1 | pass      |
| kicker / active tab        | `#90cdf4` | 10.73:1 | pass      |
| muted tab                  | `#a0aec0` |  8.17:1 | pass      |
| OSD `CH nn` on black tube  | `#8fff9e` | 16.38:1 | pass      |

Also fixed by the same pass: `fg.muted`/`fg` were dark on the dark
surface → body/body parts now use fixed light grays (mode-independent),
inner `WorkExp`/`Education` `Card.Root`s are `bg="transparent"`, and the
hover `scale(1.01)` + white box-shadow became accent border +
inner-glow (no scale, no white glow). Same accent-glow hover applied to
`.project-cards-text` for coherence.

## Files

- `src/components/CrtScreen.tsx` (new)
- `src/components/Projects/ProjectsList.tsx`
- `src/styles/ProjectCards.css`
- `src/components/AboutMe/{PersonalInfo,Formation,WorkExp,Education}.tsx`
- `src/styles/AboutMe.css`

`Skills.tsx`/`Contact.tsx` untouched (styled via their tab panels).
Not touched: Header/hero/background/glitch/PixelAvatar/index.css/
translations/Demos (parallel worker).

## Verification

- `npm run build` → exit 0.
- `npm run lint` → 5 problems (2 errors, 3 warnings), all pre-existing
  in `src/components/ui/*` — identical to baseline.
- Headless Chromium (Playwright) on `vite preview`:
  - `about-cards-1440.png`, `about-cards-390.png` — cards over aurora.
  - `tab-{0..3}-1440.png`, `tab-{0..3}-390.png` — every Formation tab,
    both viewports (`▶` marker + accent underline on active).
  - `projects-1440.png`, `screen-zoom.png` — `CH nn` labels + scanlines.
  - `poweron-frame.png` — forced mid power-on (animations paused at
    `currentTime=200ms` via Web Animations API).
  - `static-frame.png` — forced static burst (`currentTime=500ms`).
  - `corner-tl.png`, `corner-br.png`, `corner-crop.png` — pixel-corner
    close-ups (3× device scale).
  - `card-element-1440.png`, `projects-rm.png` — card element +
    reduced-motion state.
- Page errors: **0** (pageerror + console-error listeners on every page).
- `documentElement.scrollWidth === window.innerWidth`: true at 1440,
  390 and on /projects.
