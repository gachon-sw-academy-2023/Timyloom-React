import Board from '../Board/Board';
import * as S from './WorkspaceContentStyle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { objTodosDataResult } from '@/recoil/todoAtom';
import { useEffect } from 'react';

const boards = [
  [1, '우진'],
  [2, '길동'],
  [3, '만규'],
  [4, '가영'],
  [5, '원'],
  [6, '투'],
];

function WorkspaceContent() {
  const [goals, setGoals] = useRecoilState(objTodosDataResult);
  const tempGoals: any = JSON.parse(JSON.stringify(goals));
  console.log(tempGoals);

  useEffect(() => {
    console.log(goals, 'recoil이 변경되었어요!!!!!!');
  }, [goals]);

  const onDragEnd = (result: any) => {
    if (!result) return;
    const tempGoals = [...goals];
    const [reorderedItem] = tempGoals.splice(result.source.index, 1);
    console.log(reorderedItem);
    tempGoals.splice(result.destination.index, 0, reorderedItem);
    setGoals(tempGoals);
  };

  return (
    <S.WorkspaceContentWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="Goal" direction="horizontal">
          {(provided) => (
            <S.ColumnDiv {...provided.droppableProps} ref={provided.innerRef}>
              {tempGoals.map((goal: any, index: any) => (
                <Draggable draggableId={String(index)} index={index} key={String(index)}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div>{goal.goalTitle}</div>
                      <Board todos={goal.todos} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </S.ColumnDiv>
          )}
        </Droppable>
      </DragDropContext>
    </S.WorkspaceContentWrapper>
  );
}

export default WorkspaceContent;
