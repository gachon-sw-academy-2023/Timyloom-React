import * as S from '@/components/Board/BoardStyle';
import { Link } from 'react-router-dom';

function Board({ title, board }: any) {
  console.log(board);
  return (
    <S.BoardWrapper>
      <Link to="/list/1">{title}</Link>
    </S.BoardWrapper>
  );
}
export default Board;
