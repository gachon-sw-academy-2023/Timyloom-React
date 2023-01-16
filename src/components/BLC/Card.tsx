import * as S from '@/components/BLC/CardStyle';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ cardId, listId, cardData }: any) => {
  return (
    <Draggable draggableId={cardId} index={cardData.position}>
      {(draggableProvided, draggableSnapshot) => (
        <S.CardDraggable
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
        >
          <S.TextAreaWrapper>{cardData.cardTitle}</S.TextAreaWrapper>
        </S.CardDraggable>
      )}
    </Draggable>
  );
};
export default Card;
