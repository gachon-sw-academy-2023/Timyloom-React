import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as S from '@/components/BLC/ListStyle';
import Card from '@/components/BLC/Card';

function List({ listId, listData }: any) {
  let cards = listData.cards;
  console.log(listData);
  return (
    <Draggable draggableId={listId} index={listData.position}>
      {(provided) => (
        <S.ListWrapper ref={provided.innerRef} {...provided.draggableProps}>
          <S.ListContent>
            <div>{listData.listTitle}</div>

            <Droppable droppableId={listId}>
              {(droppableProvided, droppableSnapshot) => (
                <S.ListDroppable ref={droppableProvided.innerRef}>
                  {cards.map((card: any, index: any) => (
                    <Card key={card.cardId} cardId={card.cardId} listId={listId} cardData={card}></Card>
                  ))}
                  {droppableProvided.placeholder}
                </S.ListDroppable>
              )}
            </Droppable>
          </S.ListContent>
        </S.ListWrapper>
      )}
    </Draggable>
  );
}
export default List;
