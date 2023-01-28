import List from '@/components/Board/List';
import * as S from '@/components/Board/BoardStyle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import AddList from './AddList';

function Board({ boards, setBoards, boardId }: any) {
  let [board] = boards.filter((board: any) => board.boardId === boardId);
  let lists = board.lists;

  const onBeforeDragStart = () => {};

  const onDragStart = () => {};

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination, type } = result;
    switch (type) {
      case 'moveList':
        reorderListPosition(source.index, destination.index, boardId); // 리스트정렬
        break;
      case 'moveCard':
        reorderCardPosition(source, destination, result.draggableId, boardId); // 카드정렬
        break;
      default:
        break;
    }
  };

  const reorderCardPosition = (source: any, destination: any, cardId: any, boardId: any) => {
    let tempBoard = JSON.parse(JSON.stringify(boards)).filter((board: any) => board.boardId === boardId)[0];
    let tempSourceCards = tempBoard.lists.filter((list: any) => list.listId === source.droppableId)[0].cards;
    let tempDestinationCards = tempBoard.lists.filter((list: any) => list.listId === destination.droppableId)[0].cards;
    let [reorderCard] = tempSourceCards.splice(source.index, 1);
    tempDestinationCards.splice(destination.index, 0, reorderCard);
    let newBoard = tempBoard.lists.map((list: any) =>
      source.droppableId === list.listId ? { ...list, cards: tempSourceCards } : list,
    );
    newBoard = tempBoard.lists.map((list: any) =>
      destination.droppableId === list.listId ? { ...list, cards: tempDestinationCards } : list,
    );
    setBoards((prev: any) =>
      boards.map((board: any) => (boardId === board.boardId ? { ...board, lists: newBoard } : board)),
    );
  };

  const reorderListPosition = (sourceIndex: any, destinationIndex: any, boardId: any) => {
    let tempLists = JSON.parse(JSON.stringify(boards)).filter((board: any) => board.boardId === boardId)[0].lists;
    let [reorderList] = tempLists.splice(sourceIndex, 1);
    tempLists.splice(destinationIndex, 0, reorderList);
    setBoards((prev: any) =>
      boards.map((board: any) => (board.boardId === boardId ? { ...board, lists: tempLists } : board)),
    );
  };

  return (
    <>
      <DragDropContext onBeforeDragStart={onBeforeDragStart} onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="moveList" direction="horizontal">
          {(provided) => (
            <S.BoardContainer ref={provided.innerRef} {...provided.droppableProps}>
              {lists.map((list: any, index: any) => (
                <List key={list.listId} boardId={boardId} listId={list.listId} listData={list} index={index}></List>
              ))}
              {provided.placeholder}
              <AddList></AddList>
            </S.BoardContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
export default Board;
