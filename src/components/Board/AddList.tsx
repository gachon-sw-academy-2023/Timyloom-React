import { useState, useEffect } from 'react';
import * as S from '@/components/Board/AddListStyle';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import shortid from 'shortid';
import { BoardInterface } from '@/type';

function AddList() {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState<BoardInterface[]>(boardsAtom);
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
    let listId = shortid.generate();
    let log = {
      logName: `${listTitle} 리스트 생성`,
      date: new Date().getTime(),
    };
    let tempBoard = boards.map((board, index) =>
      board.boardId === boardId
        ? {
            ...board,
            logs: [...board.logs, log],
            lists: [...board.lists, { listTitle: listTitle, listId: `l-${listId}`, cards: [] }],
          }
        : board,
    );
    setBoards((prev) => tempBoard);
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
        <S.AddListBtn onClick={handleStatusTrue}>새로운 리스트 추가</S.AddListBtn>
      )}
    </S.AddListWrapper>
  );
}

export default AddList;
