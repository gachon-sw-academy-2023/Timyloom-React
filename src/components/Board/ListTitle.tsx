import { boardsAtom } from '@/recoil/boardsAtom';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './ListTitleStyle';

const ListTitle = ({ dragHandleProps, listId, title, boardId }: any) => {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const [newTitle, setnewTitle] = useState(title);
  const [editMode, seteditMode] = useState(false);

  const handleTitle = (e: any) => {
    switch (e.type) {
      case 'blur':
        saveTitle();

        seteditMode(false);
        break;
      case 'keydown':
        if (e.code === 'Enter' || e.code === 'Escape') {
          saveTitle();
          break;
        }
    }
  };

  const saveTitle = () => {
    let newBoards = boards.map((board) =>
      board.boardId === boardId
        ? {
            ...board,
            lists: board.lists.map((list) => (list.listId === listId ? { ...list, listTitle: newTitle } : list)),
          }
        : board,
    );
    setBoards((prev) => newBoards);
    seteditMode(false);
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
            onBlur={handleTitle}
            onKeyDown={handleTitle}
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
      </S.TextAreaWrapper>
    </S.Container>
  );
};
export default ListTitle;
