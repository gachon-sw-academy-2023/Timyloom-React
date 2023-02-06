import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as S from '@/components/Board/ListStyle';
import Card from '@/components/Board/Card';
import ListTitle from './ListTitle';
import { BoardInterface, ListInterface, CardInterface } from '@/type';
import AddCard from '@/components/Board/AddCard';

interface ListProps {
  listId: string;
  listData: ListInterface;
  index: number;
  boardId: string;
}

function List({ listId, listData, index, boardId }: ListProps) {
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
                  {listData.cards.map((card: CardInterface, index: number) => (
                    <Card
                      key={card.cardId}
                      cardId={card.cardId}
                      listId={listId}
                      boardId={boardId}
                      cardData={card}
                      index={index}
                    ></Card>
                  ))}
                  <AddCard listId={listId} />
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
