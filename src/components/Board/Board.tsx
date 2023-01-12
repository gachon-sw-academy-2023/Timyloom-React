import * as S from './BoardStyle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { objTodosDataResult } from '@/recoil/todoAtom';

//any 추후 타입지정 필요
function Board({ todos, index }: any) {
  const [goals, setGoals] = useRecoilState(objTodosDataResult);

  const onDragEnd = (result: any) => {
    if (!result) return;
    let tempGoals = JSON.parse(JSON.stringify(goals)); // goal 복사본
    let tempTodos = JSON.parse(JSON.stringify(todos)); // todos 복사본
    let [reorderedItem] = tempTodos.splice(result.source.index, 1);
    tempTodos.splice(result.destination.index, 0, reorderedItem);
    console.log(tempGoals[index].todos);
    console.log(tempTodos);
    tempGoals[index].todos = tempTodos;
    setGoals(tempGoals);
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
