import * as S from '@/components/Board/CardStyle';
import { Draggable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { selectedCardAtom } from '@/recoil/selectedCardAtom';


interface CardProps {
  listId: string;
  cardId: string;
  cardData: CardDataInterface;
  index: number;
}

interface CardDataInterface {
  cardTitle: string;
  cardId: string;
}

const Card = ({ listId, cardId, cardData, index }: CardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [test, setTest] = useRecoilState(testAtom);
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
