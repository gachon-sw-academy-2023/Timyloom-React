import * as S from '@/components/Board/CardStyle';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { selectedCardAtom } from '@/recoil/selectedCardAtom';
import { CgClose } from 'react-icons/cg';
import { BoardInterface, ListInterface, CardInterface } from '@/type';
import { boardsAtom } from '@/recoil/boardsAtom';

interface CardProps {
  listId: string;
  cardId: string;
  cardData: CardDataInterface;
  index: number;
  boardId: string;
}

interface CardDataInterface {
  cardTitle: string;
  cardId: string;
}

const Card = ({ listId, cardId, cardData, index, boardId }: CardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCardId, setSelectedCardId] = useRecoilState(selectedCardAtom);
  const [boards, setBoards] = useRecoilState<BoardInterface[]>(boardsAtom);

  const handleSaveModalData = () => {
    setSelectedCardId((prev) => ({
      isModalopen: !prev.isModalopen,
      listId: listId,
      cardId: cardId,
    }));
  };

  const handleDeleteCard = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    let newBoards = boards.map((board) =>
      board.boardId === boardId
        ? {
            ...board,
            lists: board.lists.map((list) =>
              list.listId === listId ? { ...list, cards: list.cards.filter((card) => card.cardId != cardId) } : list,
            ),
          }
        : board,
    );
    setBoards((prev) => newBoards);
  };

  return (
    <>
      <Draggable draggableId={cardId} index={index}>
        {(draggableProvided, draggableSnapshot) => (
          <S.CardDraggable
            ref={draggableProvided.innerRef}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
          >
            <S.TextAreaWrapper onClick={handleSaveModalData}>
              <S.CardTitleWrapper>{cardData.cardTitle}</S.CardTitleWrapper>
              <S.DeleteWrapper onClick={handleDeleteCard}>
                <CgClose />
              </S.DeleteWrapper>
            </S.TextAreaWrapper>
          </S.CardDraggable>
        )}
      </Draggable>
    </>
  );
};
export default Card;
