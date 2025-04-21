import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import dayjs from "dayjs"
import '@/styles/Calendar.css';
import { fetchFeriados } from "@/services/calendar.api";

export const CalendarDemo = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState<string | null>(null);
  interface Feriado {
    nombre: string;
    fecha: string; // o Date si es que la fecha ya es un objeto Date
  }

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
    } catch (error) {
      setError("Error al cargar los feriados");
    }
  }

  useEffect(() => {
    loadFeriados();
    console.log(error);
  }, [])

  return (
    <Box borderRadius="10px" p="10px" boxShadow="md" bg="#313173">
      <Heading size={'sm'} mb={3}>En este calendario están reflejados los dias feriados en argentina del corriente año.</Heading>
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