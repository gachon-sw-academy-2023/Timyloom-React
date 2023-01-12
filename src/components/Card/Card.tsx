import * as S from './CardStyle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { taskAtom } from '@/recoil/taskAtom';

//any 추후 타입지정 필요
function Board({ list, boardIndex, listIndex }: any) {
  const [boards, setBoards] = useRecoilState(taskAtom);

  let tempCards = JSON.parse(JSON.stringify(list.card));

  const onDragEnd = (result: any) => {
    if (!result) return;
    console.log(boardIndex, listIndex);
    let tempBoards = JSON.parse(JSON.stringify(boards));
    console.log(result);
    let [reorderedItem] = tempCards.splice(result.source.index, 1);
    tempCards.splice(result.destination.index, 0, reorderedItem);
    console.log(tempCards, 'tempCards');

    tempBoards[boardIndex].list[listIndex].card = tempCards;

    setBoards(tempBoards);
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
