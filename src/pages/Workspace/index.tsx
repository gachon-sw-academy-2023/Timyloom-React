import Sidebar from '@/components/Sidebar/Sidebar';
import Boards from '@/pages/Boards/index';
import Board from '@/pages/Board/index';
import * as S from '@/pages/Workspace/indexStyle';
import { Route, Routes } from 'react-router-dom';

function Workspace() {
  return (
    <S.WorkspaceWrapper>
      <Sidebar />
      <Routes>
        <Route path="boards" element={<Boards />}></Route>
        <Route path=":boardId" element={<Board />}></Route>
      </Routes>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
