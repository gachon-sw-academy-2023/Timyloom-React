import { useState } from 'react';
import * as S from '@/components/Board/AddListStyle';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import shortid from 'shortid';

function AddList() {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const [addStatus, setAddStatus] = useState(false);
  const [listTitle, setListTitle] = useState('');

  const handleStatusTrue = (e: any) => {
    setAddStatus(true);
  };

  const handleStatusFalse = (e: any) => {
    if (e.key === 'Enter') {
      setAddStatus(false);
      saveList();
    } else if (e.key === 'Escape') {
      setAddStatus(false);
    }
  };

  const handleChangeTitle = (e: any) => {
    setListTitle(e.target.value);
  };

  const saveList = () => {
    let listId = shortid.generate();
    let tempBoard = boards.map((board, index) =>
      board.boardId === boardId
        ? {
            ...board,
            lists: [...board.lists, { listTitle: listTitle, listId: `l-${listId}`, cards: [], position: 999 }],
            //position이 꼭 필요할까...? 한번 검토해보자
          }
        : board,
    );
    console.log(tempBoard);
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
