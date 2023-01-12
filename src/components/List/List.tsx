import Card from '@/components/Card/Card';
import * as S from '@/components/List/ListStyle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { taskAtom } from '@/recoil/taskAtom';

function List({ boardIndex }: any) {
  const [boards, setBoards] = useRecoilState(taskAtom);
  const tempBoard = JSON.parse(JSON.stringify(boards));
  const tempLists = JSON.parse(JSON.stringify(boards[boardIndex].list));

  const onDragEnd = (result: any) => {
    if (!result) return;
    let tempList = tempLists;
    const [reorderedItem] = tempList.splice(result.source.index, 1);
    tempList.splice(result.destination.index, 0, reorderedItem);
    tempBoard[boardIndex].list = tempList;
    setBoards(tempBoard);
  };

  return (
    <S.WorkspaceContentWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal">
          {(provided) => (
            <S.ColumnDiv {...provided.droppableProps} ref={provided.innerRef}>
              {tempLists.map((list: any, index: any) => (
                <Draggable draggableId={String(index)} index={index} key={String(index)}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div>{list.listTitle}</div>
                      <Card list={list} boardIndex={boardIndex} listIndex={index} />
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

export default List;
