import Board from '@/components/Board/Board';
import * as S from '@/pages/Board/indexStyle';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';

function BoardPage() {
  let { boardId } = useParams(); // 추후에 board를 구분하는 변수로 사용!
  const [boards, setBoards] = useRecoilState(boardsAtom);
  let [board] = boards.filter((board: any) => board.boardId === boardId);

  return (
    <S.BoardWrapper>
      <S.BoardTitle>{board.boardTitle}</S.BoardTitle>
      <Board boards={boards} setBoards={setBoards} boardId={boardId} />
    </S.BoardWrapper>
  );
}
export default BoardPage;
