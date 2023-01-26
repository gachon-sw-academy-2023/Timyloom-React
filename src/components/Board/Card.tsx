import * as S from '@/components/Board/CardStyle';
import { Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Draggable draggableId={cardId} index={index}>
        {/* 기존 index는 listData.position를 사용하는데 map함수의 index를 사용하면 어떨까..?  */}
        {(draggableProvided, draggableSnapshot) => (
          <S.CardDraggable
            ref={draggableProvided.innerRef}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            isDragging={draggableSnapshot.isDragging && !draggableSnapshot.isDropAnimating}
          style={getStyle(draggableProvided.draggableProps.style, draggableSnapshot)}
          >
            <S.TextAreaWrapper
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              {cardData.cardTitle}
            </S.TextAreaWrapper>
          </S.CardDraggable>
        )}
      </Draggable>
      <Modal showModal={showModal} setShowModal={setShowModal} data={cardData}></Modal>
    </>

  );
};
export default Card;
