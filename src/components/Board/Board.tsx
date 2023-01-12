import * as S from '@/components/Board/BoardStyle';
import { Link } from 'react-router-dom';

function Board({ title, board }: any) {
  const URL = `/board/${board.boardId}`;
  return (
    <S.BoardWrapper>
      <S.BoardTitle placeholder={title} />
      <Link to={URL}>이동!</Link>
    </S.BoardWrapper>
  );
}
export default Board;
