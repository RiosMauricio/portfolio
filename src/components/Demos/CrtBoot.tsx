import { useEffect, useRef, useState } from "react";

const BAR_TOTAL = 18;

export const CrtBoot = ({ onDone }: { onDone: () => void }) => {
  const [step, setStep] = useState(0);
  const [bar, setBar] = useState(0);
  const doneRef = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone();
  };

  useEffect(() => {
    rootRef.current?.focus();
    let barInterval: number | undefined;
    const timers = [
      window.setTimeout(() => setStep(1), 260),
      window.setTimeout(() => setStep(2), 470),
      window.setTimeout(() => {
        let n = 0;
        barInterval = window.setInterval(() => {
          n += 1;
          setBar(n);
          if (n >= BAR_TOTAL && barInterval !== undefined) {
            window.clearInterval(barInterval);
          }
        }, 42);
      }, 540),
      window.setTimeout(() => setStep(3), 1380),
      window.setTimeout(finish, 1580),
    ];
    return () => {
      timers.forEach((t) => window.clearTimeout(t));
      if (barInterval !== undefined) window.clearInterval(barInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blocks = "█".repeat(bar) + "░".repeat(BAR_TOTAL - bar);

  return (
    <div
      ref={rootRef}
      className="mcrt-boot"
      role="button"
      tabIndex={0}
      aria-label="Skip boot sequence"
      onClick={finish}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Escape" || e.key === " ") {
          e.preventDefault();
          finish();
        }
      }}
    >
      <div className="mcrt-boot-inner">
        {step >= 1 && (
          <>
            <div className="mcrt-boot-brand">MR-DEV 2026</div>
            <div className="mcrt-boot-dim">BIOS v2.6 · MEM 64K OK</div>
          </>
        )}
        {step >= 2 && (
          <>
            <div>BOOTING DEMOS…</div>
            <div className="mcrt-boot-bar">[{blocks}]</div>
          </>
        )}
        {step >= 3 && <div className="mcrt-boot-ready">READY</div>}
      </div>
      <div className="mcrt-boot-skip">CLICK / ESC — SKIP</div>
    </div>
  );
};
