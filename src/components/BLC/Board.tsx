import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as S from '@/components/BLC/BoardStyle';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import List from '@/components/BLC/List';

const onBeforeDragStart = () => {
  console.log('onBeforeDragStart');
};

const onDragStart = () => {
  console.log('onDragStart');
};

const onDragEnd = () => {
  console.log('onDragEnd');
};

function Board() {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  let lists = boards.lists;

  return (
    <DragDropContext onBeforeDragStart={onBeforeDragStart} onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Droppable droppableId="board" type="COLUMN" direction="horizontal">
        {(provided) => (
          <S.BoardContainer ref={provided.innerRef} {...provided.droppableProps}>
            {lists.map((list, index) => (
              <List key={list.listId} listId={list.listId} listData={list}></List>
            ))}
            {provided.placeholder}
          </S.BoardContainer>
        )}
      </Droppable>
    </DragDropContext>
  );
}
export default Board;
