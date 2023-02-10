import * as S from '@/pages/Calendar/indexStyle';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface CalendarProps {
  events: eventData[];
}

interface eventData {
  title: string;
  start: string;
  end: string;
  color: string;
  textColor: string;
}

function Calendar({ events }: CalendarProps) {
  return (
    <S.Container>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        dayMaxEvents={true}
        events={events}
        height={'800px'}
        editable={true}
      />
    </S.Container>
  );
}

export default Calendar;
