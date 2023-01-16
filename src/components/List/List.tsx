import * as S from './ListStyle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { taskAtom } from '@/recoil/taskAtom';

//any 추후 타입지정 필요
function List({ listIsDragging, list, boardId, listId }: any) {
  const [boards, setBoards] = useRecoilState(taskAtom); // recoil에서 관리하는 board들을 담고 있는 데이터

  let tempBoards = JSON.parse(JSON.stringify(boards)); //보드들 정보를 tempBoards에 저장
  let [selectedBoard] = JSON.parse(JSON.stringify(boards.filter((board) => board.boardId === boardId))); // 선택한 보드 1개를 저장
  let tempList = JSON.parse(JSON.stringify(list)); // 선택한 리스트 1개를 저장
  let tempLists = selectedBoard.list; // 선택된 보드 1개에서 list 배열을 tempLists에 담는다
  let tempCards = JSON.parse(JSON.stringify(list.card)); // 선택한 리스트에서 카드 배열을 tempCards에 담는다

  const onDragEnd = (result: any) => {
    console.log(`선택한 BoardId : ${boardId}, listId:${listId}`);
    if (!result) return;
    let [reorderedItem] = tempCards.splice(result.source.index, 1); // 선택한 카드를 배열에서 빼서 reorderedItem에 담는다.
    tempCards.splice(result.destination.index, 0, reorderedItem); // 목적지에 reorderedItem을 넣는다.
    tempList.card = tempCards; // tempList 객체서 card 배열을 변경한다.
    let newLists = tempLists.map((list: any) => (list.listId === listId ? tempList : list)); //리스트 배열 중에서 listId가 일치하는 곳에 새로운 List를 넣어준다.
    selectedBoard.list = newLists; // 새로운리스트들을 선택한 보드의 리스트 배열에 넣어준다.
    let newBoards = tempBoards.map((board: any) => (board.boardId === boardId ? selectedBoard : board)); // 전체 보드에서 바뀐 보드를 업데이트 해준다.
    setBoards(newBoards); //recoil을 재설정한다.
  };
  // 반복을 통해서 리스트 들을 보여준다.

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="Card">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <S.ListWrapper listIsDragging={listIsDragging}>
              {tempCards.map((card: any, index: any) => (
                <Draggable draggableId={String(index)} index={index} key={index}>
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <S.CardWrapper cardIsDragging={snapshot.isDragging}>{card.cardTitle}</S.CardWrapper>
                      {/* 여기 바로 위에 진짜 Card 컴포넌트가 들어가야함 */}
                    </div>
                  )}
                </Draggable>
              ))}
            </S.ListWrapper>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default List;
