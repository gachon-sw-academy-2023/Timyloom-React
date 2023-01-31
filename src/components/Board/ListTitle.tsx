import { boardsAtom } from '@/recoil/boardsAtom';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './ListTitleStyle';
import { BoardInterface, ListInterface, CardInterface } from '@/type';

interface ListTitleProps {
  dragHandleProps: Object;
  listId: string;
  title: string;
  boardId: string;
}

const ListTitle = ({ dragHandleProps, listId, title, boardId }: ListTitleProps) => {
  const [boards, setBoards] = useRecoilState<BoardInterface[]>(boardsAtom);
  const [newTitle, setnewTitle] = useState<string>(title);
  const [editMode, seteditMode] = useState<boolean>(false);

  const handleTitleByonBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    saveTitle();
    seteditMode(false);
  };

  const handleTitleByonKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === 'Enter' || e.code === 'Escape') {
      saveTitle();
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

  const handleDeleteList = () => {
    let newBoards = boards.map((board) =>
      board.boardId === boardId ? { ...board, lists: board.lists.filter((list) => list.listId !== listId) } : board,
    );
    setBoards((prev) => newBoards);
  };

  return (
    <S.Container {...dragHandleProps}>
      <S.TextAreaWrapper>
        {editMode ? (
          <S.Textarea
            onChange={(e) => {
              setnewTitle((prev) => e.target.value);
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
