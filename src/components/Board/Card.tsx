import * as S from '@/components/Board/CardStyle';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ listId, cardId, cardData, index }: any) => {
  return (
    <Draggable draggableId={cardId} index={index}>
      {/* 기존 index는 listData.position를 사용하는데 map함수의 index를 사용하면 어떨까..?  */}
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
