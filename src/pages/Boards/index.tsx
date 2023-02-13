import WorkspaceHeader from '@/components/WorkspaceHeader/WorkspaceHeader';
import * as S from '@/pages/Boards/indexStyle';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import { defaultData } from '@/utils/generateBoard';
import { useState, useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { BoardData } from '@/type';
import axios from 'axios';

interface BoardsProps {
  sidebarOpen: boolean;
}

const handleAddBoard = (boards: BoardData[], setBoards: SetterOrUpdater<BoardData[]>) => {
  const newData = defaultData();
  axios
    .post('/create/board', newData)
    .then((res) => {
      switch (res.status) {
        case 200:
          setBoards((prev) => [...prev, newData]);
          break;
        default:
          break;
      }
    })
    .catch((error) => alert(error));
};

function Boards({ sidebarOpen }: BoardsProps) {
  const [loading, setLoading] = useState(true);
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const personalBoards = boards.filter((board: BoardData) => board.owner === localStorage.getItem('id'));
  const [searchTerm, setSearchTerm] = useState('');

  setTimeout(() => {
    setLoading((prev) => false);
  }, 1000);

  useEffect(() => {
    axios.get('/boards').then((res) => {
      switch (res.status) {
        case 200:
          setBoards((prev: any) => res.data);
          setLoading((prev) => false);
          break;
        default:
          break;
      }
    });
  }, []);

  if (loading)
    return (
      <S.PageWrapper>
        <WorkspaceHeader setSearchTerm={setSearchTerm} />
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
      <WorkspaceHeader setSearchTerm={setSearchTerm} />
      <S.ContentWrapper isopen={sidebarOpen}>
        <S.BoardContainer>
          {personalBoards
            .filter((board: any) => board.boardTitle.toLowerCase().includes(searchTerm))
            .map((board: BoardData, index: number) => (
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
