import WorkspaceHeader from '@/components/WorkspaceHeader/WorkspaceHeader';
import * as S from '@/pages/Boards/indexStyle';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import { defaultData } from '@/components/Board/BoardData';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { BoardData } from '@/type';

interface BoardsProps {
  sidebarOpen: boolean;
}

const handleAddBoard = (boards: BoardData[], setBoards: SetterOrUpdater<BoardData[]>) => {
  const newData = defaultData();
  const newBoards = [...JSON.parse(JSON.stringify(boards)), newData];
  setBoards((prev) => newBoards);
};

function Boards({ sidebarOpen }: BoardsProps) {
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const personalBoards = boards.filter((board: BoardData) => board.owner === localStorage.getItem('id'));

  setTimeout(() => {
    setLoading((prev) => false);
  }, 1000);

  if (loading)
    return (
      <S.PageWrapper>
        <WorkspaceHeader />
        <S.BoardContainer>
          <S.SkeletonWrapper>
            <Skeleton variant="rounded" animation="wave" width={255} height={170} />
          </S.SkeletonWrapper>
          <S.SkeletonWrapper>
            <Skeleton variant="rounded" animation="wave" width={255} height={170} />
          </S.SkeletonWrapper>
          <S.SkeletonWrapper>
            <Skeleton variant="rounded" animation="wave" width={255} height={170} />
          </S.SkeletonWrapper>
        </S.BoardContainer>
      </S.PageWrapper>
    );

  return (
    <S.PageWrapper>
      <WorkspaceHeader />
      <S.ContentWrapper isopen={sidebarOpen}>
        <S.BoardContainer>
          {personalBoards.map((board: BoardData, index: number) => (
            <S.BoardWrapper key={index} to={`/workspace/${board.boardId}`} brightness={board.brightness}>
              <S.BoardTitle>{board.boardTitle}</S.BoardTitle>
              <S.BackgroundWrapper backgroundColor={board.backgroundColor} />
            </S.BoardWrapper>
          ))}
          <S.AddBoardButton
            onClick={() => {
              handleAddBoard(boards, setBoards);
            }}
          >
            보드 추가하기!
            <S.AddSvg />
          </S.AddBoardButton>
        </S.BoardContainer>
      </S.ContentWrapper>
    </S.PageWrapper>
  );
}

export default Boards;
