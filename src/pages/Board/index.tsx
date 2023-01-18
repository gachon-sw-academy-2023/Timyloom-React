import { useState } from 'react';
import Board from '@/components/Board/Board';
import * as S from '@/pages/Board/indexStyle';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import Swal from 'sweetalert2';

function BoardPage() {
  let { boardId } = useParams(); // 추후에 board를 구분하는 변수로 사용!
  const [boards, setBoards] = useRecoilState(boardsAtom);
  let [board] = boards.filter((board: any) => board.boardId === boardId);
  const [boardTitle, setBoardTitle] = useState(board.boardTitle);

  const handleChange = (e: any) => {
    setBoardTitle((prev) => e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      removeFocus();
      e.preventDefault();
      handleSaveData();
      let newBoards = boards.map((board) => (board.boardId === boardId ? { ...board, boardTitle: boardTitle } : board));
      setBoards((prev) => newBoards);
    }
  };

  const removeFocus = () => {
    (document.activeElement as HTMLElement).blur();
  };
  const handleSaveData = () => {
    let newBoards = boards.map((board) => (board.boardId === boardId ? { ...board, boardTitle: boardTitle } : board));
    setBoards((prev) => newBoards);
  };

  const handleDeleteBoard = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await setBoards((prev) => boards.filter((board) => board.boardId !== boardId));
        // document.location.href = '/workspace';
      }
    });
  };

  return (
    <S.BoardWrapper>
      <S.BoardTitle
        spellCheck="false"
        boardTitle={boardTitle}
        value={boardTitle}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          handleSaveData();
        }}
      ></S.BoardTitle>
      <S.DeleteBtn onClick={handleDeleteBoard}>보드 삭제</S.DeleteBtn>
      <Board boards={boards} setBoards={setBoards} boardId={boardId} />
    </S.BoardWrapper>
  );
}
export default BoardPage;
