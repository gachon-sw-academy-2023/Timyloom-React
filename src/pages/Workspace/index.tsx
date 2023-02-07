import { useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Boards from '@/pages/Boards/index';
import Board from '@/pages/Board/index';
import Calendar from '@/pages/Calendar/index';
import * as S from '@/pages/Workspace/indexStyle';
import { Route, Routes } from 'react-router-dom';

function Workspace() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <S.WorkspaceWrapper>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Routes>
        <Route path="boards" element={<Boards sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}></Route>
        <Route path=":boardId" element={<Board />}></Route>
        <Route path="calendar" element={<Calendar />}></Route>
      </Routes>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
