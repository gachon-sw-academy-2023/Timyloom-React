import Sidebar from '@/components/Sidebar/Sidebar';
import Board from '@/components/Board/Board';
import * as S from '@/pages/Workspace/indexStyle';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { taskAtom } from '@/recoil/taskAtom';
import { ReactComponent as UserSvg } from '@/assets/images/userAvatar.svg';
import { Avatar } from '@mui/material';

function Workspace() {
  const [boards, setBoards] = useRecoilState(taskAtom);
  console.log(boards);
  return (
    <S.WorkspaceWrapper>
      <Sidebar />
      <S.ContentWrapper>
        <Avatar>H</Avatar>
        <S.HeaderWrapper>
          <S.SearchWrapper>
            <S.Search type="search" placeholder="Search for Boards here"></S.Search>
            <S.SearchIcon />
          </S.SearchWrapper>
          <S.ProfileWrapper>
            <div>ddd</div>
            <Avatar>H</Avatar>
          </S.ProfileWrapper>
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
