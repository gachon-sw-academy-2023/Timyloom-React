import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as S from '@/components/Board/BoardStyle';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import List from '@/components/Board/List';

const onBeforeDragStart = () => {
  console.log('onBeforeDragStart');
};

const onDragStart = () => {
  console.log('onDragStart');
};

function Board() {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  let lists = boards.lists;

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
    let tempBoard = JSON.parse(JSON.stringify(boards));
    let tempSourceList = tempBoard.lists.filter((list: any) => list.listId === source.droppableId)[0];
    let tempDestinationList = tempBoard.lists.filter((list: any) => list.listId === destination.droppableId)[0];
    let [reorderCard] = tempSourceList.cards.splice(source.index, 1);
    tempDestinationList.cards.splice(destination.index, 0, reorderCard);
    tempBoard.lists.map((list: any) => (list.listId === tempSourceList.listId ? tempSourceList : list));
    tempBoard.lists.map((list: any) => (list.listId === tempDestinationList.listId ? tempDestinationList : list));
    setBoards((prev) => tempBoard);
  };

  const reorderListPosition = (sourceIndex: any, destinationIndex: any) => {
    let tempBoard = JSON.parse(JSON.stringify(boards));
    let [reorderList] = tempBoard.lists.splice(sourceIndex, 1);
    tempBoard.lists.splice(destinationIndex, 0, reorderList);
    setBoards((prev) => tempBoard);
  };

  return (
    <DragDropContext onBeforeDragStart={onBeforeDragStart} onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="moveList" direction="horizontal">
        {(provided) => (
          <S.BoardContainer ref={provided.innerRef} {...provided.droppableProps}>
            {lists.map((list, index) => (
              <List key={list.listId} listId={list.listId} listData={list} index={index}></List>
            ))}
            {provided.placeholder}
          </S.BoardContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default Board;
