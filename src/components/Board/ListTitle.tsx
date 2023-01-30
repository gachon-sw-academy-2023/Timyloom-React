import { boardsAtom } from '@/recoil/boardsAtom';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './ListTitleStyle';

const ListTitle = ({ dragHandleProps, listId, title, boardId }: any) => {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const [newTitle, setnewTitle] = useState(title);
  const [editMode, seteditMode] = useState(false);

  const handleTitleByonBlur = (e: any) => {
    saveTitle();
    seteditMode(false);
  };

  const handleTitleByonKeyDown = (e: any) => {
    if (e.code === 'Enter' || e.code === 'Escape') {
      saveTitle();
    }
  };

  const saveTitle = () => {
    let newBoards = boards.map((board: any) =>
      board.boardId === boardId
        ? {
            ...board,
            lists: board.lists.map((list: any) => (list.listId === listId ? { ...list, listTitle: newTitle } : list)),
          }
        : board,
    );
    setBoards((prev: any) => newBoards);
    seteditMode(false);
  };

  const handleDeleteList = () => {
    let newBoards = boards.map((board: any) =>
      board.boardId === boardId
        ? { ...board, lists: board.lists.filter((list: any) => list.listId !== listId) }
        : board,
    );
    setBoards((prev: any) => newBoards);
  };

  return (
    <S.Container {...dragHandleProps}>
      <S.TextAreaWrapper>
        {editMode ? (
          <S.Textarea
            onChange={(e) => {
              setnewTitle((prev: any) => e.target.value);
            }}
            value={newTitle}
            onBlur={handleTitleByonBlur}
            onKeyDown={handleTitleByonKeyDown}
            autoFocus
            spellCheck="false"
          ></S.Textarea>
        ) : (
          <S.Textdiv
            onClick={() => {
              seteditMode(true);
            }}
          >
            {newTitle}
          </S.Textdiv>
        )}
        <S.Delete onClick={handleDeleteList}>X</S.Delete>
      </S.TextAreaWrapper>
    </S.Container>
  );
};
export default ListTitle;
