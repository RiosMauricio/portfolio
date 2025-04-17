import { Box } from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import '@/styles/Calendar.css';

export const CalendarDemo = () => {
  const events = [
    { title: "Evento 1", start: "2023-04-10" },
    { title: "Evento 2", start: "2023-04-15" },
  ];

  return (
    <Box borderRadius="10px" p="10px" boxShadow="md" bg="#313173">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
      />
    </Box>
  );
};