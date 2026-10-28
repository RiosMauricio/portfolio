import { CalendarDemo } from "./CalendarDemo"
import { StatsDemo } from "./StatsDemo"
import { MapDemo } from "./MapDemo"
import { FormDemo } from "./FormDemo"
import { TerminalDemo } from "./TerminalDemo"
import { DemoErrorBoundary } from "./DemoErrorBoundary"
import { useLanguage } from "@/i18n/languageContext"

export const ShowedDemo = ({ mode }: { mode: string }) => {
  const { t } = useLanguage();

  const getDemoContent = () => {
    switch (mode) {
      case 'stats':
        return <StatsDemo />;
      case 'calendar':
        return <CalendarDemo />;
      case 'map':
        return <MapDemo />;
      case 'form':
        return <FormDemo />;
      case 'terminal':
        return <TerminalDemo />;
      default:
        return <StatsDemo />;
    }
  };

  const titles = t.demos.dialogTitles;
  const titleMap: Record<string, string> = {
    stats: titles.stats,
    calendar: titles.calendar,
    map: titles.map,
    form: titles.form,
    terminal: titles.terminal,
  };

  return (
    <div className="mcrt-demo" role="document" aria-label={titleMap[mode] ?? titles.stats}>
      {/* key remonta el boundary en cada canal para resetear hasError */}
      <DemoErrorBoundary key={mode}>
        {getDemoContent()}
      </DemoErrorBoundary>
    </div>
  );
};
