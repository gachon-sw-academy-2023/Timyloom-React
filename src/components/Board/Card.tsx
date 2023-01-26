import * as S from '@/components/Board/CardStyle';
import { Draggable } from 'react-beautiful-dnd';
// import { useState, useEffect } from 'react';
import Modal from '@/components/Modal/Modal';

function getStyle(style, snapshot) {
  if (!snapshot.isDropAnimating) {
    return style;
  }
  const { moveTo, curve, duration } = snapshot.dropAnimation;
  // move to the right spot
  const translate = `translate(${moveTo.x}px, ${moveTo.y}px)`;
  // add a bit of turn for fun
  const rotate = 'rotate(0.01turn)';

  // patching the existing style
  return {
    ...style,
  };
}

const Card = ({ listId, cardId, cardData, index }: any) => {
  return (
    <Draggable draggableId={cardId} index={index}>
      {/* 기존 index는 listData.position를 사용하는데 map함수의 index를 사용하면 어떨까..?  */}
      {(draggableProvided, draggableSnapshot) => (
        <S.CardDraggable
          onClick={() => {
            console.log('aaa');
          }}
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          isDragging={draggableSnapshot.isDragging && !draggableSnapshot.isDropAnimating}
          style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
        >
          <S.TextAreaWrapper>{cardData.cardTitle}</S.TextAreaWrapper>
          <Modal></Modal>
        </S.CardDraggable>
      )}
    </Draggable>
  );
};
export default Card;
