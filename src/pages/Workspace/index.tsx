import Sidebar from '@/components/Sidebar/Sidebar';
import Board from '@/components/Board/Board';
import * as S from '@/pages/Workspace/indexStyle';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { taskAtom } from '@/recoil/taskAtom';

function Workspace() {
  const [boards, setBoards] = useRecoilState(taskAtom);
  console.log(boards);
  return (
    <S.WorkspaceWrapper>
      <Sidebar />
      <S.ContentWrapper>
        <S.HeaderWrapper>
          <S.SearchWrapper>{/* <S.Search></S.Search> */}</S.SearchWrapper>
        </S.HeaderWrapper>
        <S.BoardWrapper>
          {boards.map((board) => (
            <Board title={board.boardTitle} board={board} />
          ))}
        </S.BoardWrapper>
      </S.ContentWrapper>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
