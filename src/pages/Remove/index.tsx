import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import RemoveCard from '@/components/RemoveCard/RemoveCard';
import * as S from '@/pages/Remove/indexStyle';
import { BoardInterface } from '@/type';

function Remove() {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState<BoardInterface[]>(boardsAtom);
  useEffect(() => {
    setBoards((prev) => boards.filter((board) => board.boardId !== boardId));
  }, []);

  return (
    <S.Container>
      <RemoveCard></RemoveCard>
    </S.Container>
  );
}

export default Remove;
