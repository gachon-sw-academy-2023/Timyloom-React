import List from '@/components/Board/List';
import Welcome from '@/components/Board/Welcome';
import * as S from '@/components/Board/BoardStyle';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import AddList from './AddList';
import { useRecoilState, SetterOrUpdater } from 'recoil';
import { selectedCardAtom } from '@/recoil/selectedCard';
import { BoardData, ListData, SelectedCardData } from '@/type';
import CardModal from '@/components/Modals/CardModal/CardModal';
import { temporaryBoardAtom } from '@/recoil/temporaryBoard';
import axios from 'axios';
interface BoardProps {
  boards: BoardData[];
  setBoards: SetterOrUpdater<BoardData[]>;
  boardId: string;
}

interface DndPositionInterface {
  index: number;
  droppableId: string;
}

function Board({ boards, setBoards, boardId }: BoardProps) {
  const [board] = boards.filter((board) => board.boardId === boardId);
  const [temporaryBoard, setTemporaryBoard] = useRecoilState<any[]>(temporaryBoardAtom);
  const [selectedCardId, setSelectedCardId] = useRecoilState(selectedCardAtom);
  const lists = board.lists;

  const onBeforeDragStart = () => {};

  const onDragStart = () => {};

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination, type } = result;
    switch (type) {
      case 'moveList':
        if (source.index !== destination.index) {
          reorderListPosition(source.index, destination.index, boardId); // 리스트정렬
        }
        break;
      case 'moveCard':
        if (
          source.droppableId !== destination.droppableId ||
          (source.droppableId === destination.droppableId && source.index !== destination.index)
        ) {
          reorderCardPosition(source, destination, result.draggableId, boardId); // 카드정렬
        }
        break;
      default:
        break;
    }
  };

  const reorderCardPosition = (
    source: DndPositionInterface,
    destination: DndPositionInterface,
    cardId: string,
    boardId: string,
  ) => {
    const tempBoard = JSON.parse(JSON.stringify(boards)).filter((board: BoardData) => board.boardId === boardId)[0];
    const tempSourceCards = tempBoard.lists.filter((list: ListData) => list.listId === source.droppableId)[0].cards;
    const tempDestinationCards = tempBoard.lists.filter((list: ListData) => list.listId === destination.droppableId)[0]
      .cards;
    const [reorderCard] = tempSourceCards.splice(source.index, 1);
    tempDestinationCards.splice(destination.index, 0, reorderCard);
    let newBoard = tempBoard.lists.map((list: ListData) =>
      source.droppableId === list.listId ? { ...list, cards: tempSourceCards } : list,
    );
    newBoard = tempBoard.lists.map((list: ListData) =>
      destination.droppableId === list.listId ? { ...list, cards: tempDestinationCards } : list,
    );
    setTemporaryBoard((prev) => [...prev, boards]);
    axios
      .post(`/update/board`, { ...tempBoard, lists: newBoard })
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

  const reorderListPosition = (sourceIndex: number, destinationIndex: number, boardId: string) => {
    const tempLists = JSON.parse(JSON.stringify(boards)).filter((board: BoardData) => board.boardId === boardId)[0]
      .lists;
    const [reorderList] = tempLists.splice(sourceIndex, 1);
    tempLists.splice(destinationIndex, 0, reorderList);
    setTemporaryBoard((prev) => [...prev, boards]); // 임시보드s 를 저장하는게 아닌 임시보드를 저장하는 방법으로 리팩토링 해보자!

    //db 코드
    const [board] = boards.filter((board) => board.boardId === boardId);
    axios
      .post(`/update/board`, { ...board, lists: tempLists })
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
      <DragDropContext onBeforeDragStart={onBeforeDragStart} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="moveList" direction="horizontal">
          {(provided) => (
            <S.BoardContainer ref={provided.innerRef} {...provided.droppableProps}>
              {lists.map((list, index) => (
                <List key={list.listId} boardId={boardId} listId={list.listId} listData={list} index={index}></List>
              ))}
              <AddList></AddList>
              {provided.placeholder}
            </S.BoardContainer>
          )}
        </Droppable>
      </DragDropContext>
      {lists.length === 0 && <Welcome brightness={board.brightness} welcomeMessageIndex={0} />}
      {lists.length === 1 && lists[0].cards.length === 0 && (
        <Welcome brightness={board.brightness} welcomeMessageIndex={1} />
      )}
      {selectedCardId.isModalopen && <CardModal></CardModal>}
    </>
  );
}
export default Board;
