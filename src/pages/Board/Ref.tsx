// 로직, 디자인 전부 수정 필요!

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';

// 테스트 아이템 생성
const getItems = (count: any, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }));

const grid = 8;

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});

const getCardStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const reorder = (list, startIndex, endIndex) => {
  console.log(list, startIndex, endIndex);
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source: any, destination: any, droppableSource: any, droppableDestination: any) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);
  const result: any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  return result;
};

function Ref() {
  const [state, setState] = useState([getItems(6), getItems(5, 10)]);
  console.log(state);
  const [board, setBoard] = useRecoilState(boardsAtom);
  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    const sourceIndex = +source.droppableId;
    const destinationIndex = +destination.droppableId;

    if (sourceIndex === destinationIndex) {
      const items: any = reorder(board[sourceIndex], source.index, destination.index);
      let newBoard = [...board];
      newBoard[sourceIndex] = items;
      setBoard(newBoard);
    } else {
      const result = move(board[sourceIndex], board[destinationIndex], source, destination);
      const newBoard = [...board];
      newBoard[sourceIndex] = result[sourceIndex];
      newBoard[destinationIndex] = result[destinationIndex];
      console.log(newBoard);
      setBoard(newBoard.filter((group) => group.length)); // 그룹에 항목이 없으면 제거
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setBoard([...board, []]);
        }}
      >
        Add new group
      </button>
      <button
        type="button"
        onClick={() => {
          setBoard([...board, getItems(1)]);
        }}
      >
        Add new item
      </button>
      <div style={{ display: 'flex' }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {board.map((list, index) => (
            <Droppable key={index} droppableId={`${index}`}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                  {list.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getCardStyle(snapshot.isDragging, provided.draggableProps.style)}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-around' }}>{card.content}</div>
                          <button>삭제</button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}
export default Ref;
