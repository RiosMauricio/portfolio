import { CalendarDemo } from "./CalendarDemo"
import { KanbanDemo } from "./KanbanDemo"
import { MapDemo } from "./MapDemo"
import { FormDemo } from "./FormDemo"
import { TerminalDemo } from "./TerminalDemo"
import { DemoErrorBoundary } from "./DemoErrorBoundary"
import { useLanguage } from "@/i18n/languageContext"

export const ShowedDemo = ({ mode }: { mode: string }) => {
  const { t } = useLanguage();

  const getDemoContent = () => {
    switch (mode) {
      case 'kanban':
        return <KanbanDemo />;
      case 'calendar':
        return <CalendarDemo />;
      case 'map':
        return <MapDemo />;
      case 'form':
        return <FormDemo />;
      case 'terminal':
        return <TerminalDemo />;
      default:
        return <KanbanDemo />;
    }
  };

  const titles = t.demos.dialogTitles;
  const titleMap: Record<string, string> = {
    kanban: titles.kanban,
    calendar: titles.calendar,
    map: titles.map,
    form: titles.form,
    terminal: titles.terminal,
  };

  return (
    <div className="mcrt-demo" role="document" aria-label={titleMap[mode] ?? titles.kanban}>
      {/* key remonta el boundary en cada canal para resetear hasError */}
      <DemoErrorBoundary key={mode}>
        {getDemoContent()}
      </DemoErrorBoundary>
    </div>
  );
};
