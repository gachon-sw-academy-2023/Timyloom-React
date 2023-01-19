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
        reorderListPosition(source.index, destination.index); // 리스트정렬
        break;
      case 'moveCard':
        reorderCardPosition(source, destination, result.draggableId); // 카드정렬
        break;
      default:
        break;
    }
  };

  const reorderCardPosition = (source: any, destination: any, cardId: any) => {
    let tempBoards = JSON.parse(JSON.stringify(boards));
    let tempBoard = JSON.parse(JSON.stringify(board));
    let tempSourceList = tempBoard.lists.filter((list: any) => list.listId === source.droppableId)[0];
    let tempDestinationList = tempBoard.lists.filter((list: any) => list.listId === destination.droppableId)[0];
    let [reorderCard] = tempSourceList.cards.splice(source.index, 1);
    tempDestinationList.cards.splice(destination.index, 0, reorderCard);
    tempBoard.lists.map((list: any) => (list.listId === tempSourceList.listId ? tempSourceList : list));
    tempBoard.lists.map((list: any) => (list.listId === tempDestinationList.listId ? tempDestinationList : list));
    let newBoards = tempBoards.map((board: any) => (board.boardId === tempBoard.boardId ? tempBoard : board));
    setBoards((prev: any) => newBoards);
  };

  const reorderListPosition = (sourceIndex: any, destinationIndex: any) => {
    let tempBoards = JSON.parse(JSON.stringify(boards));
    let tempBoard = JSON.parse(JSON.stringify(board));
    let [reorderList] = tempBoard.lists.splice(sourceIndex, 1);
    tempBoard.lists.splice(destinationIndex, 0, reorderList);
    let newBoards = tempBoards.map((board: any) => (board.boardId === tempBoard.boardId ? tempBoard : board));
    setBoards((prev: any) => newBoards);
  };

  return (
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
  );
}
export default Board;
