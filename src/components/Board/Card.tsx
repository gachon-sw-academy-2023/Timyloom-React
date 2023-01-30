import * as S from '@/components/Board/CardStyle';
import { Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { useRecoilState } from 'recoil';
import { testAtom } from '@/recoil/testAtom';

const Card = ({ listId, cardId, cardData, index }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [test, setTest] = useRecoilState(testAtom);

  const handleSaveModalData = () => {
    setTest((prev) => ({
      isModalopen: !prev.isModalopen,
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
      <Modal showModal={showModal} setShowModal={setShowModal} data={cardData}></Modal>
    </>
  );
};
export default Card;
