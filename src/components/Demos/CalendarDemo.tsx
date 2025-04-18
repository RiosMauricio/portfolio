import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import '@/styles/Calendar.css';
import { fetchFeriados } from "@/services/calendar.api";

export const CalendarDemo = () => {
  const [events, setEvents] = useState([]); 
  const [error, setError] = useState<string | null> (null); 

  const loadFeriados = async () => {
    try {
      const data = await fetchFeriados(); 
      const eventsMap = data.map(element => {
        return ({ title: element.nombre, start: new Date(element.fecha) })
      });

      setEvents(eventsMap); 
    } catch (error) {
      setError("Error al cargar los feriados")
    }
  }

  useEffect(() => {
    loadFeriados();
  }, [])

  console.log(events);

  return (
    <Box borderRadius="10px" p="10px" boxShadow="md" bg="#313173">
      <Heading size={'sm'} mb={3}>En este calendario están reflejados los dias feriados en argentina del corriente año.</Heading>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
      />
    </Box>
  );
};