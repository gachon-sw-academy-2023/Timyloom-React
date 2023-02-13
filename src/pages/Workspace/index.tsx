import { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Boards from '@/pages/Boards/index';
import Board from '@/pages/Board/index';
import Calendar from '@/pages/Calendar/index';
import * as S from '@/pages/Workspace/indexStyle';
import { Route, Routes } from 'react-router-dom';
import Table from '@/pages/Table/index';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import { BoardData, ListData, CardData } from '@/type';

interface eventData {
  id: string;
  title: string;
  start: string;
  end: string;
  color: string;
  textColor: string;
}

function Workspace() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const personalBoards = boards.filter((board: BoardData) => board.owner === localStorage.getItem('id'));
  let events: eventData[] = [];

  personalBoards.forEach((board: BoardData) =>
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
          id: card.cardId,
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
    <S.WorkspaceWrapper>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Routes>
        <Route path="boards" element={<Boards sidebarOpen={sidebarOpen} />}></Route>
        <Route path=":boardId" element={<Board />}></Route>
        <Route path="calendar" element={<Calendar events={events} />}></Route>
        <Route path="table" element={<Table events={events} />}></Route>
      </Routes>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
