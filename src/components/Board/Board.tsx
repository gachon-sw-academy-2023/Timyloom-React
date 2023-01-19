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
    // let tempBoards = JSON.parse(JSON.stringify(boards));
    // let tempBoard = JSON.parse(JSON.stringify(board));
    // let tempSourceList = tempBoard.lists.filter((list: any) => list.listId === source.droppableId)[0];
    // let tempDestinationList = tempBoard.lists.filter((list: any) => list.listId === destination.droppableId)[0];
    // let [reorderCard] = tempSourceList.cards.splice(source.index, 1);
    // tempDestinationList.cards.splice(destination.index, 0, reorderCard);
    // tempBoard.lists.map((list: any) => (list.listId === tempSourceList.listId ? tempSourceList : list));
    // tempBoard.lists.map((list: any) => (list.listId === tempDestinationList.listId ? tempDestinationList : list));
    // let newBoards = tempBoards.map((board: any) => (board.boardId === tempBoard.boardId ? tempBoard : board));
    // setBoards((prev: any) => newBoards);
    let tempBoard = JSON.parse(JSON.stringify(boards)).filter((board: any) => board.boardId === boardId)[0];
    let tempSourceCards = tempBoard.lists.filter((list: any) => list.listId === source.droppableId)[0].cards;
    let tempDestinationCards = tempBoard.lists.filter((list: any) => list.listId === destination.droppableId)[0].cards;
    let [reorderCard] = tempSourceCards.splice(source.index, 1);
    tempDestinationCards.splice(destination.index, 0, reorderCard);
    console.log(tempSourceCards, tempDestinationCards);
    console.log(tempBoard);

    //여기가 마지막 작업 상태 ===  현재 카드들을 옮겨야 하는 리스트로 옮긴 상태
    //해야하는 일은 바뀐 리스트들을 적용해야 하는 단계입니다.
  };

  const reorderListPosition = (sourceIndex: any, destinationIndex: any, boardId: any) => {
    // 리펙토링 전 코드
    // let tempBoards = JSON.parse(JSON.stringify(boards));
    // let tempBoard = JSON.parse(JSON.stringify(board));
    // let [reorderList] = tempBoard.lists.splice(sourceIndex, 1);
    // tempBoard.lists.splice(destinationIndex, 0, reorderList);
    // let newBoards = tempBoards.map((board: any) => (board.boardId === tempBoard.boardId ? tempBoard : board));
    // setBoards((prev: any) => newBoards);

    //리펙토링 후 코드
    let tempLists = JSON.parse(JSON.stringify(boards)).filter((board: any) => board.boardId === boardId)[0].lists;
    let [reorderList] = tempLists.splice(sourceIndex, 1);
    tempLists.splice(destinationIndex, 0, reorderList);
    setBoards((prev: any) =>
      boards.map((board: any) => (board.boardId === boardId ? { ...board, lists: tempLists } : board)),
    );
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
