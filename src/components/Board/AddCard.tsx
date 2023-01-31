import { useState } from 'react';
import * as S from '@/components/Board/AddCardStyle';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import shortid from 'shortid';
import { BoardInterface } from '@/type';

interface AddCardProps {
  listId: string;
}

function AddCard({ listId }: any) {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState<BoardInterface[]>(boardsAtom);
  const [addStatus, setAddStatus] = useState<boolean>(false);
  const [cardTitle, setCardTitle] = useState<string>('');

  const handleStatusTrue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAddStatus(true);
  };

  const handleStatusFalse = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setAddStatus(false);
      saveCard();
    } else if (e.key === 'Escape') {
      setAddStatus(false);
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  const saveCard = () => {
    let cardId = shortid.generate();
    let tempBoard = boards.map((board, index) =>
      board.boardId === boardId
        ? {
            ...board,
            lists: board.lists.map((list) => {
              return list.listId == listId
                ? { ...list, cards: [...list.cards, { cardTitle: cardTitle, cardId: `c-${cardId}` }] }
                : list;
            }),
          }
        : board,
    );
    setBoards((prev) => tempBoard);
  };
  return (
    <S.AddCardWrapper>
      {addStatus ? (
        <S.AddCardInput
          onChange={handleChangeTitle}
          onKeyDown={handleStatusFalse}
          onBlur={() => {
            setAddStatus(false);
          }}
          autoFocus
        ></S.AddCardInput>
      ) : (
        <S.AddCardBtn onClick={handleStatusTrue}>새로운 카드 추가</S.AddCardBtn>
      )}
    </S.AddCardWrapper>
  );
}

export default AddCard;
