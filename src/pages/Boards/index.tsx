import WorkspaceHeader from '@/components/WorkspaceHeader/WorkspaceHeader';
import * as S from '@/pages/Boards/indexStyle';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import { defaultData } from '@/components/Board/BoardData';
import { useState } from 'react';
import Skeleton from '@mui/material/Skeleton';

const handleAddBoard = (boards: any, setBoards: any) => {
  let newData = defaultData();
  let newBoards = [...JSON.parse(JSON.stringify(boards)), newData];
  setBoards((prev: any) => newBoards);
};

function Boards({ sidebarOpen }: any) {
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useRecoilState(boardsAtom);
  let personalBoards = boards.filter((board) => board.owner === localStorage.getItem('id'));

  setTimeout(() => {
    setLoading((prev) => false);
  }, 1000);

  if (loading)
    return (
      <S.PageWrapper isopen={sidebarOpen}>
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
    <S.PageWrapper isopen={sidebarOpen}>
      <WorkspaceHeader />
      <S.ContentWrapper isopen={sidebarOpen}>
        <S.BoardContainer>
          {personalBoards.map((board, index) => (
            <S.BoardWrapper key={index} to={`/workspace/${board.boardId}`}>
              <S.BoardTitle>{board.boardTitle}</S.BoardTitle>
              <S.ImageWrapper />
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
