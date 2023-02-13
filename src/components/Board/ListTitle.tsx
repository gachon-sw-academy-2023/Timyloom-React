import { boardsAtom } from '@/recoil/boards';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from './ListTitleStyle';
import { BoardData, ListData, CardData } from '@/type';
import { CgClose } from 'react-icons/cg';
import Swal from 'sweetalert2';
import { temporaryBoardAtom } from '@/recoil/temporaryBoard';
import axios from 'axios';

interface ListTitleProps {
  dragHandleProps: Object;
  listId: string;
  title: string;
  boardId: string;
}

const ListTitle = ({ dragHandleProps, listId, title, boardId }: ListTitleProps) => {
  const [boards, setBoards] = useRecoilState<BoardData[]>(boardsAtom);
  const [newTitle, setnewTitle] = useState<string>(title);
  const [editMode, seteditMode] = useState<boolean>(false);
  const [temporaryBoard, setTemporaryBoard] = useRecoilState<any[]>(temporaryBoardAtom);

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
    const newBoards = boards.map((board) =>
      board.boardId === boardId
        ? {
            ...board,
            lists: board.lists.map((list) => (list.listId === listId ? { ...list, listTitle: newTitle } : list)),
          }
        : board,
    );
    setBoards((prev) => newBoards);
    seteditMode(false);
    //db작성 코드 부분
    const [board] = boards.filter((board) => board.boardId === boardId);
    const newBoard = {
      ...board,
      lists: board.lists.map((list) => (list.listId === listId ? { ...list, listTitle: newTitle } : list)),
    };
    axios
      .post('/create/board', newBoard)
      .then((res) => {
        switch (res.status) {
          case 200:
            break;
          default:
            break;
        }
      })
      .catch((error) => alert(error));
  };
  const handleDeleteList = () => {
    setTemporaryBoard((prev) => [...prev, boards]);
    const log = {
      logName: `${title} 리스트 삭제`,
      date: new Date().getTime(),
    };
    const newBoards = boards.map((board) =>
      board.boardId === boardId
        ? { ...board, logs: [...board.logs, log], lists: board.lists.filter((list) => list.listId !== listId) }
        : board,
    );

    //db 코드 작성 부분
    const [board] = boards.filter((board) => board.boardId === boardId);
    const newBoard = {
      ...board,
      logs: [...board.logs, log],
      lists: board.lists.filter((list) => list.listId !== listId),
    };

    Swal.fire({
      title: 'Are you sure delete the list?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setBoards((prev) => newBoards);
        //db코드 작성부분
        axios
          .post('/create/board', newBoard)
          .then((res) => {
            switch (res.status) {
              case 200:
                break;
              default:
                break;
            }
          })
          .catch((error) => alert(error));
      }
    });
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
        <S.DeleteWrapper onClick={handleDeleteList}>
          <CgClose />
        </S.DeleteWrapper>
      </S.TextAreaWrapper>
    </S.Container>
  );
};
export default ListTitle;
