# Demos page — CRT/arcade monitor redesign

Task `task_8bdf2d4d3886` · worker `term_46e2de1d` · repo `/home/mauri081/projects/portfolio` @ bd77900

## What changed

The "sober modern desktop" monitor on `/demos` is now a chunky retro CRT / arcade
monitor ("MR-DEV 2026") matching the site's night-blue + scanlines + pixel
identity.

- **`src/pages/Demos/Demos.tsx`** — rewired: boot/ready phases, `mode` channel
  state, 240 ms static-flash channel change, Escape + press-active-button-again
  to return to idle, sessionStorage boot-once flag, reduced-motion bypass.
  Removed the resize-listener `screenWidth` logic and the wallpaper/desktop
  metaphor.
- **`src/components/Demos/ShowedDemo.tsx`** — demos now render *inside* the CRT
  screen (`.mcrt-demo`, scrollable, `role="document"` + aria-label) instead of a
  Chakra Dialog. `DemoErrorBoundary` remounts per channel.
- **`src/components/Demos/CrtBoot.tsx`** (new) — power-on line flash (~340 ms),
  BIOS text lines, block-character loading bar, READY; ~1.58 s total; skippable
  via click / Enter / Escape (focusable `role="button"`).
- **`src/styles/Monitor.css`** — all frame/boot/OSD/screen styles, namespaced
  `.mcrt-*`: plastic shell with faint site-style scanlines, recessed inner
  bezel, edge-only vignette + masked edge scanlines + glass glare (all
  `pointer-events: none`), TV-style OSD channel tag, brand plate, PWR LED,
  stand, 640 px breakpoint, reduced-motion OSD guard.
- **`src/styles/Dock.css`** — dock is now a row of round arcade buttons on the
  monitor chin: cyan/magenta/amber/green caps (`--btn` inline var), glossy
  radial highlight, dark housing ring, `:active`/`.is-active` sinks 2 px + lit
  glow, pixel-font labels, `aria-pressed` toggles.

## Verification (fresh `npm run build` + `vite preview`, headless Chrome 156 via CDP)

- `npm run build` → exit 0. `npm run lint` → same 5 pre-existing issues in
  `src/components/ui/*` (baseline unchanged).
- Screenshots in `./artifacts/demos-crt/` — 1440×900 and 390×844:
  mid-boot, ready desktop + arcade dock, static-mid transition, all 4 demos
  open, `help` typed + executed in the terminal demo, real Tab focus ring on a
  dock button, second-visit (boot skipped) frames.
- `scrollWidth === innerWidth` at both viewports (no horizontal scroll).
- Buttons are 46 px+ at 390 px (≥44 px touch targets); all arcade labels legible.
- Reduced motion emulated via CDP: no boot element, demo mounts instantly, no
  static, OSD hidden.
- Page errors: none from the page itself — only the **pre-existing**
  `thesportsdb.com` CORS rejection the StatsDemo already handles with its error
  UI (same on the current live dialog; unrelated to this change).

## Notes for the coordinator

- **Class collision avoided**: the parallel worker's `ProjectCards.css` also
  uses `.crt-*` (`.crt-screen`, `.crt-static`, `.crt-osd`…). All my classes use
  the `.mcrt-*` prefix, so no interference either way.
- Their new `src/components/CrtScreen.tsx` is TV/video-specific (media layer,
  viewport-latched power-on) — not reused here; the demo monitor needs
  interactive-content layering. Could be unified later if desired.
- No new i18n keys: dock/OSD text reuses existing `demos.dock`/`screenTitle`
  keys; boot + hardware strings stay English per convention. `translations.ts`
  untouched.
- No commits made. Untracked artifacts: `artifacts/demos-crt/*.png`, this
  report.
