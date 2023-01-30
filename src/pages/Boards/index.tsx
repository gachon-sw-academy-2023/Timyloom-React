import WorkspaceHeader from '@/components/WorkspaceHeader/WorkspaceHeader';
import * as S from '@/pages/Boards/indexStyle';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import { defaultData } from '@/components/Board/BoardData';

const handleAddBoard = (boards: any, setBoards: any) => {
  let newData = defaultData();
  let newBoards = [...JSON.parse(JSON.stringify(boards)), newData];
  setBoards((prev: any) => newBoards);
};

function Boards({ sidebarOpen }: any) {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  let personalBoards = boards.filter((board) => board.owner === localStorage.getItem('id'));

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
