import Card from '@/components/Card/Card';
import * as S from '@/components/List/ListStyle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { taskAtom } from '@/recoil/taskAtom';
import { useEffect } from 'react';

function List({ boardId }: any) {
  const [boards, setBoards] = useRecoilState(taskAtom); // useRecoilState를 사용해서 boards를 가져온다.
  const [selectedBoard] = JSON.parse(JSON.stringify(boards)).filter((board: any) => board.boardId === boardId); // JSON.parse(JSON.stringify()) -> 깊은 복사를 위해 사용
  let tempBoards = JSON.parse(JSON.stringify(boards)); // 원하는 값을 변경 한 뒤에 tempBoards에 넣어줄 것이다.
  let tempList = JSON.parse(JSON.stringify(selectedBoard.list)); // 원하는 값을 변경하기 위함

  const onDragEnd = (result: any) => {
    if (!result) return;
    const [reorderedItem] = tempList.splice(result.source.index, 1); // 내가 드래그 하려고 하는 요소를 tempList에서 제외한다.
    tempList.splice(result.destination.index, 0, reorderedItem); // 내가 드래그해서 가려고 하는 목적지에 reorderedItem을 넣어준다.
    selectedBoard.list = tempList; // 현재 보드의 list를 새로운 list로 변경한다.
    tempBoards = tempBoards.map((board: any) => (board.boardId === boardId ? selectedBoard : board)); // 보드배열을 반복하면서 내가 변경한 보드 ID와 배열안에 있는 보드ID 가 일치하면 변경
    setBoards(tempBoards); // taskAtom recoil 업데이트!
  };

  useEffect(() => {
    console.log(boards);
  }, [boards]);

  return (
    <S.WorkspaceContentWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal">
          {(provided) => (
            <S.ColumnDiv {...provided.droppableProps} ref={provided.innerRef}>
              {tempList.map((list: any, index: any) => (
                <Draggable draggableId={String(index)} index={index} key={String(index)}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div>{list.listTitle}</div>
                      <Card list={list} boardId={boardId} listIndex={index} listId={list.listId} />
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
