import * as S from '@/pages/Calendar/indexStyle';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import { BoardData, ListData, CardData } from '@/type';

interface eventData {
  title: string;
  start: string;
  end: string;
  color: string;
  textColor: string;
}

function Calendar() {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  let events: eventData[] = [];
  boards.forEach((board: BoardData) =>
    board.lists.forEach((list: ListData) =>
      list.cards.forEach((card: CardData) => {
        const startDate =
          card.date.from.year.toString() +
          '-' +
          ('00' + card.date.from.month.toString()).slice(-2) +
          '-' +
          ('00' + card.date.from.day.toString()).slice(-2);
        const endDate =
          card.date.to.year.toString() +
          '-' +
          ('00' + card.date.to.month.toString()).slice(-2) +
          '-' +
          ('00' + card.date.to.day.toString()).slice(-2);
        events.push({
          title: card.cardTitle,
          start: startDate,
          end: endDate,
          color: board.backgroundColor,
          textColor: board.brightness > 100 ? '#000000' : '#ffffff',
        });
      }),
    ),
  );

  return (
    <S.Container>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        dayMaxEvents={true}
        events={events}
        height={'800px'}
      />
    </S.Container>
  );
}

export default Calendar;
