import Sidebar from '@/components/Sidebar/Sidebar';
import WorkspaceHeader from '@/components/WorkspaceHeader/WorkspaceHeader';
import * as S from '@/pages/Workspace/indexStyle';
import { ReactComponent as UserSvg } from '@/assets/images/userAvatar.svg';
import { Avatar } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { style } from 'styled-system';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import { defaultData } from '@/components/Board/BoardData';

const handleAddBoard = (boards: any, setBoards: any) => {
  let newData = defaultData();
  let newBoards = [...JSON.parse(JSON.stringify(boards)), newData];
  setBoards((prev: any) => newBoards);
};

function Workspace() {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  let personalBoards = boards.filter((board) => board.owner === localStorage.getItem('id'));

  return (
    <S.WorkspaceWrapper>
      <Sidebar />
      <S.ContentWrapper>
        <WorkspaceHeader />
        <S.BoardContainer>
          {personalBoards.map((board, index) => (
            // <Board title={board.boardTitle} board={board} />
            <S.BoardWrapper key={index} to={`/board/${board.boardId}`}>
              <S.BoardTitle className="title">{board.boardTitle}</S.BoardTitle>
              <S.ImageWrapper className="image" />
            </S.BoardWrapper>
          ))}
          <S.AddBoardButton
            onClick={() => {
              handleAddBoard(boards, setBoards);
            }}
          >
            보드 추가하기!
          </S.AddBoardButton>
        </S.BoardContainer>
      </S.ContentWrapper>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
