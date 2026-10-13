import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import dayjs from "dayjs"
import '@/styles/Calendar.css';
import { fetchFeriados } from "@/services/calendar.api";
import { useLanguage } from "@/i18n/languageContext";

export const CalendarDemo = () => {
  const { t } = useLanguage();
  const [events, setEvents] = useState<{ title: string; start: Date }[]>([]);
  const [error, setError] = useState<string | null>(null);
  interface Feriado {
    nombre: string;
    fecha: string; // o Date si es que la fecha ya es un objeto Date
  }

  useEffect(() => {
    const loadFeriados = async () => {
      try {
        const data = await fetchFeriados();
        const eventsMap = data.map((element: Feriado) => {
          return {
            title: element.nombre,
            start: dayjs(element.fecha).toDate()
          };
        });

        setEvents(eventsMap);
      } catch {
        setError(t.demos.calendar.error);
      }
    };

    loadFeriados();
  }, [t]);

  return (
    <Box borderRadius="10px" p="10px" boxShadow="md" bg="#23272f">
      <Heading size={'sm'} mb={3}>{t.demos.calendar.heading}</Heading>
      {error && <p style={{ color: "#fc8181", marginBottom: "8px" }}>{error}</p>}
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        selectable={true}
        displayEventTime={false}
        eventContent={(eventInfo) => (
          <Box
            bg="orange.400"
            color="white"
            p="4px"
            borderRadius="5px"
            w={'100%'}
            textAlign="center"
            whiteSpace="normal"
            overflow="hidden"
            wordBreak="break-word"
          >
            {eventInfo.event.title}
          </Box>
        )}
      />
    </Box>
  );
};
