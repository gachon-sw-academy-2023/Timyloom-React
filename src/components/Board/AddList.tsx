import { useState, useEffect } from 'react';
import * as S from '@/components/Board/AddListStyle';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import { temporaryBoardAtom } from '@/recoil/temporaryBoard';
import shortid from 'shortid';
import { BoardData } from '@/type';
import axios from 'axios';

function AddList() {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState<BoardData[]>(boardsAtom);
  const [temporaryBoard, setTemporaryBoard] = useRecoilState<any[]>(temporaryBoardAtom);
  const [addStatus, setAddStatus] = useState<boolean>(false);
  const [listTitle, setListTitle] = useState<string>('');

  const handleStatusTrue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAddStatus(true);
  };

  const handleStatusFalse = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setAddStatus(false);
      saveList();
    } else if (e.key === 'Escape') {
      setAddStatus(false);
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListTitle(e.target.value);
  };

  const saveList = () => {
    const listId = shortid.generate();
    ///axios 추가 부분
    const [board] = boards.filter((board) => board.boardId === boardId);
    const newLists = [...board.lists, { listTitle: listTitle, listId: `l-${listId}`, cards: [] }];
    axios
      .post(`/update/board`, {
        ...board,
        lists: newLists,
      })
      .then((res) => {
        switch (res.status) {
          case 200:
            setTemporaryBoard((prev) => [...prev, board]);
            setBoards((prev) => res.data);
            break;
          default:
            break;
        }
      })
      .catch((Error) => {
        alert(Error);
      });
  };
  return (
    <S.AddListWrapper>
      {addStatus ? (
        <S.AddListInput
          onChange={handleChangeTitle}
          onKeyDown={handleStatusFalse}
          onBlur={() => {
            setAddStatus(false);
          }}
          autoFocus
        ></S.AddListInput>
      ) : (
        <S.AddListBtn onClick={handleStatusTrue}>Add another list</S.AddListBtn>
      )}
    </S.AddListWrapper>
  );
}

export default AddList;
