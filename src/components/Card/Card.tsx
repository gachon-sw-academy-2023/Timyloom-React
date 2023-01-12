import * as S from './CardStyle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { taskAtom } from '@/recoil/taskAtom';

//any 추후 타입지정 필요
function Board({ list, boardId, listIndex, listId }: any) {
  const [boards, setBoards] = useRecoilState(taskAtom);

  //이부분 주석 안적으면 까먹음....ㄹㅇ루
  let tempBoards = JSON.parse(JSON.stringify(boards));
  let [selectedBoard] = JSON.parse(JSON.stringify(boards.filter((board) => board.boardId === boardId)));
  let tempList = JSON.parse(JSON.stringify(list));
  let tempLists = selectedBoard.list;
  let tempCards = JSON.parse(JSON.stringify(list.card));

  const onDragEnd = (result: any) => {
    console.log(`선택한 BoardId : ${boardId}, listId:${listId}`);
    if (!result) return;
    let [reorderedItem] = tempCards.splice(result.source.index, 1);
    tempCards.splice(result.destination.index, 0, reorderedItem);
    tempList.card = tempCards;
    let newLists = tempLists.map((list: any) => (list.listId === listId ? tempList : list));
    console.log(newLists);
    selectedBoard.list = newLists;
    let newBoards = tempBoards.map((board: any) => (board.boardId === boardId ? selectedBoard : board));
    setBoards(newBoards);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="Card">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <S.BoardWrapper>
              {tempCards.map((card: any, index: any) => (
                <Draggable draggableId={String(index)} index={index} key={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <S.CardWrapper>{card.cardTitle}</S.CardWrapper>
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
