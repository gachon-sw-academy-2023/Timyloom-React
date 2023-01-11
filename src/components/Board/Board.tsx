import * as S from './BoardStyle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const cards = ['책읽기', '공부하기', '운동하기', '쇼핑하기'];

//any 추후 타입지정 필요
function Board({ todos }: any) {
  const onDragEnd = () => {
    console.log('드래그');
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="Goal">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <S.BoardWrapper>
              {todos.map((todo, index) => (
                <Draggable draggableId={String(index)} index={index} key={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <S.CardWrapper>{todo.title}</S.CardWrapper>
                    </div>
                  )}
                </Draggable>
              ))}
            </S.BoardWrapper>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
