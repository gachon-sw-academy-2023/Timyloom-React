import * as S from '@/components/Board/CardStyle';
import { Draggable } from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import { selectedCardAtom } from '@/recoil/selectedCard';
import { CgClose } from 'react-icons/cg';
import { BoardData, CardData, SelectedCardData } from '@/type';
import { boardsAtom } from '@/recoil/boards';
import { temporaryBoardAtom } from '@/recoil/temporaryBoard';
import { FcClock } from 'react-icons/fc';
import { ImCheckmark } from 'react-icons/im';
import { useCheckboxState } from 'pretty-checkbox-react';
import axios from 'axios';
import { standardDateFormat } from '@/utils/handleDateFormat';
import '@djthoms/pretty-checkbox';

interface CardProps {
  listId: string;
  cardId: string;
  cardData: CardData;
  index: number;
  boardId: string;
}

const Card = ({ listId, cardId, cardData, index, boardId }: CardProps) => {
  const [selectedCard, setSelectedCard] = useRecoilState<SelectedCardData>(selectedCardAtom);
  const [boards, setBoards] = useRecoilState<BoardData[]>(boardsAtom);
  const [temporaryBoard, setTemporaryBoard] = useRecoilState<any[]>(temporaryBoardAtom);
  const date = standardDateFormat(cardData.date);
  const checkbox = useCheckboxState();

  const handleSaveModalData = () => {
    setSelectedCard((prev) => ({
      isModalopen: !prev.isModalopen,
      boardId: boardId,
      listId: listId,
      cardId: cardId,
      cardData: cardData,
    }));
  };

  const handleDeleteCard = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const [board] = boards.filter((board) => board.boardId === boardId);
    const newBoard = {
      ...board,
      lists: board.lists.map((list) =>
        list.listId === listId ? { ...list, cards: list.cards.filter((card) => card.cardId != cardId) } : list,
      ),
    };
    axios
      .post('/update/board', newBoard)
      .then((res) => {
        switch (res.status) {
          case 200:
            setTemporaryBoard((prev) => [...prev, board]);
            setBoards((prev) => res.data);
            break;
          default:
            break;
        }
      })
      .catch((error) => alert(error));
  };

  const handleDoneStatus = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.stopPropagation();
    //db 작성 부분
    const [board] = boards.filter((board) => board.boardId === boardId);
    const newBoard = {
      ...board,
      lists: board.lists.map((list) =>
        list.listId === listId
          ? {
              ...list,
              cards: list.cards.map((card) => (card.cardId === cardId ? { ...card, isDone: !card.isDone } : card)),
            }
          : list,
      ),
    };
    axios
      .post(`/update/board`, newBoard)
      .then((res) => {
        switch (res.status) {
          case 200:
            setBoards((prev) => res.data);
            break;
          default:
            break;
        }
      })
      .catch((Error) => {
        alert(Error);
      });
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
            <S.TextAreaWrapper onClick={handleSaveModalData} isDone={cardData.isDone}>
              <S.CardHeaderWrapper>
                <S.CheckboxCustom
                  icon={<ImCheckmark className="svg" data-type="svg" color="white" />}
                  color="info"
                  {...checkbox}
                  checked={cardData.isDone}
                  onClick={handleDoneStatus}
                />

                <S.CardTitleWrapper>{cardData.cardTitle}</S.CardTitleWrapper>

                <S.DeleteWrapper onClick={handleDeleteCard}>
                  <CgClose />
                </S.DeleteWrapper>
              </S.CardHeaderWrapper>
              <S.InformationWrapper>
                <FcClock size="20" />
                <div>
                  {date.startDate}~{date.endDate}
                </div>
              </S.InformationWrapper>
            </S.TextAreaWrapper>
          </S.CardDraggable>
        )}
      </Draggable>
    </>
  );
};
export default Card;
