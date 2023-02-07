import { useState } from 'react';
import * as S from '@/pages/Calendar/indexStyle';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import { BoardData, ListData, CardData } from '@/type';

function Calendar() {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  let events: any = [];
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
        });
      }),
    ),
  );
  console.log(events);
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
