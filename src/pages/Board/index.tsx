import Board from '@/components/Board/Board';
import * as S from '@/pages/Board/indexStyle';
import { useParams } from 'react-router-dom';

function BoardPage() {
  let { boardId } = useParams(); // 추후에 board를 구분하는 변수로 사용!
  return (
    <S.BoardWrapper>
      <Board />
    </S.BoardWrapper>
  );
}
export default BoardPage;
