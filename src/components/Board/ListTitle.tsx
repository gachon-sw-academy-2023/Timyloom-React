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
    seteditMode(false);
    //db작성 코드 부분
    const [board] = boards.filter((board) => board.boardId === boardId);
    const newBoard = {
      ...board,
      lists: board.lists.map((list) => (list.listId === listId ? { ...list, listTitle: newTitle } : list)),
    };
    axios
      .post('/update/board', newBoard)
      .then((res) => {
        switch (res.status) {
          case 200:
            setBoards((prev) => res.data);
            break;
          default:
            break;
        }
      })
      .catch((error) => alert(error));
  };

  const handleDeleteList = () => {
    setTemporaryBoard((prev) => [...prev, boards]);
    //db 코드 작성 부분
    const [board] = boards.filter((board) => board.boardId === boardId);
    const newBoard = {
      ...board,
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
        //db코드 작성부분
        axios
          .post('/update/board', newBoard)
          .then((res) => {
            switch (res.status) {
              case 200:
                setBoards((prev) => res.data);
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
