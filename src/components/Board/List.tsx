import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as S from '@/components/Board/ListStyle';
import Card from '@/components/Board/Card';
import ListTitle from './ListTitle';

function List({ listId, listData, index, boardId }: any) {
  return (
    <Draggable draggableId={listId} index={index}>
      {(provided) => (
        <S.ListWrapper ref={provided.innerRef} {...provided.draggableProps}>
          <S.ListContent>
            <ListTitle
              dragHandleProps={provided.dragHandleProps}
              boardId={boardId}
              listId={listId}
              title={listData.listTitle}
            ></ListTitle>

            <Droppable droppableId={listId} type="moveCard">
              {(droppableProvided, droppableSnapshot) => (
                <S.ListDroppable ref={droppableProvided.innerRef}>
                  {listData.cards.map((card: any, index: any) => (
                    <Card key={card.cardId} cardId={card.cardId} listId={listId} cardData={card} index={index}></Card>
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
