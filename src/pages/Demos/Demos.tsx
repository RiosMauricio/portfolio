import { Box } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ShowedDemo } from "@/components/Demos/ShowedDemo";
import { CrtBoot } from "@/components/Demos/CrtBoot";
import { LuKanban } from "react-icons/lu";
import { FaRegCalendarAlt, FaWpforms, FaTerminal } from "react-icons/fa";
import "@/styles/Monitor.css";
import "@/styles/Dock.css";
import { useLanguage } from "@/i18n/languageContext";

const BOOT_FLAG = "mrdemos.booted";
const SWITCH_MS = 240;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;

export const Demos = () => {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<"boot" | "ready">(() => {
    if (prefersReducedMotion()) return "ready";
    try {
      if (window.sessionStorage.getItem(BOOT_FLAG)) return "ready";
    } catch {
      /* storage no disponible: el boot corre igual */
    }
    return "boot";
  });
  const [mode, setMode] = useState<string | null>(null);
  const [switching, setSwitching] = useState(false);
  const switchTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (switchTimer.current !== undefined) {
        window.clearTimeout(switchTimer.current);
      }
    };
  }, []);

  const finishBoot = useCallback(() => {
    try {
      window.sessionStorage.setItem(BOOT_FLAG, "1");
    } catch {
      /* modo privado: se muestra el boot en cada visita */
    }
    setPhase("ready");
  }, []);

  // Cambio de canal: estática breve y recién ahí se monta el destino.
  const changeChannel = useCallback((next: string | null) => {
    if (switchTimer.current !== undefined) return;
    if (prefersReducedMotion()) {
      setMode(next);
      return;
    }
    setSwitching(true);
    switchTimer.current = window.setTimeout(() => {
      switchTimer.current = undefined;
      setMode(next);
      setSwitching(false);
    }, SWITCH_MS);
  }, []);

  // Escape apaga el canal y vuelve a la pantalla idle.
  useEffect(() => {
    if (!mode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") changeChannel(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, changeChannel]);

  const dockApps = [
    { mode: "kanban", num: "01", color: "#22d3ee", icon: <LuKanban />, label: t.demos.dock.kanban },
    { mode: "calendar", num: "02", color: "#f472b6", icon: <FaRegCalendarAlt />, label: t.demos.dock.calendar },
    { mode: "form", num: "03", color: "#fbbf24", icon: <FaWpforms />, label: t.demos.dock.form },
    { mode: "terminal", num: "04", color: "#4ade80", icon: <FaTerminal />, label: t.demos.dock.terminal },
  ];

  // Durante el boot un botón sirve de skip y abre el canal directo.
  const pressChannel = (target: string) => {
    if (phase === "boot") {
      finishBoot();
      setMode(target);
      return;
    }
    changeChannel(mode === target ? null : target);
  };

  const activeApp = dockApps.find((app) => app.mode === mode);

  return (
    <Box
      minH="100vh"
      pt={{ base: "70px", md: "80px" }}
      pb="70px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={3}
    >
      <div className="mcrt">
        <div className="mcrt-body">
          <div className="mcrt-screen-bezel">
            {/* "dark" scopea los semantic tokens de Chakra (fg, fg.muted,
                bg, border) a los valores oscuros dentro del tubo. */}
            <div className="mcrt-screen dark">
              <div className="mcrt-grid" aria-hidden="true" />

              {phase === "boot" ? (
                <CrtBoot onDone={finishBoot} />
              ) : (
                !switching &&
                (mode ? (
                  <ShowedDemo mode={mode} />
                ) : (
                  <div className="mcrt-idle">
                    <div className="mcrt-idle-brand">MR-DEV 2026</div>
                    <div className="mcrt-idle-sub">{t.demos.screenTitle}</div>
                    <div className="mcrt-idle-hint">
                      {t.demos.subtitle}
                      <span className="hud-caret" aria-hidden="true" />
                    </div>
                  </div>
                ))
              )}

              {switching && <div className="mcrt-static" aria-hidden="true" />}

              {phase === "ready" && !switching && activeApp && (
                <div className="mcrt-osd" key={activeApp.mode} aria-hidden="true">
                  CH {activeApp.num} · {activeApp.label}
                </div>
              )}

              <div className="mcrt-scan-edge" aria-hidden="true" />
              <div className="mcrt-vignette" aria-hidden="true" />
              <div className="mcrt-glare" aria-hidden="true" />
            </div>
          </div>

          <div className="mcrt-deck">
            <nav className="dock" aria-label={t.nav.demos}>
              {dockApps.map((app) => (
                <div
                  className="arcade-btn-wrap"
                  key={app.mode}
                  style={{ "--btn": app.color } as CSSProperties}
                >
                  <button
                    className={`arcade-btn${mode === app.mode ? " is-active" : ""}`}
                    aria-label={app.label}
                    aria-pressed={mode === app.mode}
                    onClick={() => pressChannel(app.mode)}
                  >
                    {app.icon}
                  </button>
                  <span className="arcade-label" aria-hidden="true">
                    {app.label}
                  </span>
                </div>
              ))}
            </nav>
            <div className="mcrt-deck-meta">
              <span className="mcrt-brand">MR-DEV 2026</span>
              <span className={`mcrt-led${phase === "boot" ? " is-booting" : ""}`}>PWR</span>
            </div>
          </div>
        </div>

        <div className="mcrt-stand" aria-hidden="true" />
        <div className="mcrt-foot" aria-hidden="true" />
      </div>
    </Box>
  );
};
