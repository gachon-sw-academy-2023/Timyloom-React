import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import RemoveCard from '@/components/RemoveCard/RemoveCard';
import * as S from '@/pages/Remove/indexStyle';

function Remove() {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState(boardsAtom);
  useEffect(() => {
    setBoards((prev: any) => boards.filter((board: any) => board.boardId !== boardId));
  }, []);

  return (
    <S.Container>
      <RemoveCard></RemoveCard>
    </S.Container>
  );
}

export default Remove;
