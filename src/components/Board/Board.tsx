import List from '@/components/Board/List';
import { useEffect, useState } from 'react';
import * as S from '@/components/Board/BoardStyle';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import AddList from './AddList';
import { useRecoilState, SetterOrUpdater } from 'recoil';
import { selectedCardAtom } from '@/recoil/selectedCardAtom';
import { BoardInterface, ListInterface } from '@/type';
import { useDidMountEffect } from '@/hooks/useDidMountEffect';
import CardModal from '@/components/Modals/CardModal/CardModal';
import { temporaryBoardAtom } from '@/recoil/temporaryBoardAtom';

interface BoardProps {
  boards: BoardInterface[];
  setBoards: SetterOrUpdater<BoardInterface[]>;
  boardId: string;
}

interface DndPositionInterface {
  index: number;
  droppableId: string;
}

function Board({ boards, setBoards, boardId }: BoardProps) {
  let [board] = boards.filter((board) => board.boardId === boardId);
  const [selectedCardId, setSelectedCardId] = useRecoilState(selectedCardAtom);
  const [temporaryBoard, setTemporaryBoard] = useRecoilState<any>(temporaryBoardAtom);
  const [cardData, setcardData] = useState({ cardTitle: '', cardId: '' });
  let lists = board.lists;

  useDidMountEffect(() => {
    if (selectedCardId.isModalopen) {
      let [list] = board.lists.filter((list) => list.listId === selectedCardId.listId);
      let [card] = list.cards.filter((card) => card.cardId === selectedCardId.cardId);
      setcardData({ ...card });
    }
  }, [selectedCardId]);

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
    let tempBoard = JSON.parse(JSON.stringify(boards)).filter((board: BoardInterface) => board.boardId === boardId)[0];
    let tempSourceCards = tempBoard.lists.filter((list: ListInterface) => list.listId === source.droppableId)[0].cards;
    let tempDestinationCards = tempBoard.lists.filter(
      (list: ListInterface) => list.listId === destination.droppableId,
    )[0].cards;
    let [reorderCard] = tempSourceCards.splice(source.index, 1);
    tempDestinationCards.splice(destination.index, 0, reorderCard);
    let newBoard = tempBoard.lists.map((list: ListInterface) =>
      source.droppableId === list.listId ? { ...list, cards: tempSourceCards } : list,
    );
    newBoard = tempBoard.lists.map((list: ListInterface) =>
      destination.droppableId === list.listId ? { ...list, cards: tempDestinationCards } : list,
    );
    setTemporaryBoard((prev) => [...prev, boards]);
    setBoards((prev) => boards.map((board) => (boardId === board.boardId ? { ...board, lists: newBoard } : board)));
  };

  const reorderListPosition = (sourceIndex: number, destinationIndex: number, boardId: string) => {
    let tempLists = JSON.parse(JSON.stringify(boards)).filter((board: BoardInterface) => board.boardId === boardId)[0]
      .lists;
    let [reorderList] = tempLists.splice(sourceIndex, 1);
    tempLists.splice(destinationIndex, 0, reorderList);
    setTemporaryBoard((prev) => [...prev, boards]);
    setBoards((prev) => boards.map((board) => (board.boardId === boardId ? { ...board, lists: tempLists } : board)));
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
      <CardModal showModal={selectedCardId.isModalopen} setShowModal={setSelectedCardId} data={cardData} />
    </>
  );
}
export default Board;
