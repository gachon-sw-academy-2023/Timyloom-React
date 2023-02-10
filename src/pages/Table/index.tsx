import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import * as S from '@/pages/Table/indexStyle';

interface TableProps {
  events: eventData[];
}

interface eventData {
  title: string;
  start: string;
  end: string;
  color: string;
  textColor: string;
}

function Table({ events }: TableProps) {
  return (
    <S.Container>
      <FullCalendar
        plugins={[listPlugin]}
        initialView="listWeek"
        events={events}
        height={800}
        headerToolbar={{
          start: 'title',
          center: '',
          end: 'listDay,listWeek,listMonth prev,next',
        }}
        views={{
          listDay: { buttonText: 'Day' },
          listWeek: { buttonText: 'Week' },
          listMonth: { buttonText: 'Month' },
        }}
      />
    </S.Container>
  );
}
export default Table;
