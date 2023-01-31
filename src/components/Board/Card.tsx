import * as S from '@/components/Board/CardStyle';
import { Draggable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { selectedCardAtom } from '@/recoil/selectedCardAtom';

const Card = ({ boardId, listId, cardId, cardData, index }: any) => {
  const [selectedCardId, setSelectedCardId] = useRecoilState(selectedCardAtom);

  const handleSaveModalData = () => {
    setSelectedCardId((prev) => ({
      isModalopen: !prev.isModalopen,
      boardId: boardId,
      listId: listId,
      cardId: cardId,
    }));
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
            <S.TextAreaWrapper onClick={handleSaveModalData}>{cardData.cardTitle}</S.TextAreaWrapper>
          </S.CardDraggable>
        )}
      </Draggable>
    </>
  );
};
export default Card;
