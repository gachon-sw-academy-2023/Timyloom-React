import Sidebar from '@/components/Sidebar/Sidebar';
import Board from '@/components/Board/Board';
import * as S from '@/pages/Workspace/indexStyle';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { taskAtom } from '@/recoil/taskAtom';
import { useEffect } from 'react';

function Workspace() {
  const [boards, setBoards] = useRecoilState(taskAtom);

  useEffect(() => {
    console.log(boards);
  }, [boards]);

  //임시 공간입니다!!! 자주사용하는 함수는 모듈로 분리합니다!
  const handleAddboard = () => {
    const lastBoardId = Number(boards[boards.length - 1].boardId);
    const owner: any = localStorage.getItem('id');
    setBoards((prev) => [
      ...boards,
      {
        owner: owner,
        boardTitle: '새로운 보드',
        boardId: (lastBoardId + 1).toString(),
        list: [
          {
            listTitle: '새로운 리스트',
            listId: '1',
            card: [],
          },
        ],
      },
    ]);
  };
  return (
    <S.WorkspaceWrapper>
      <Sidebar />
      <S.ContentWrapper>
        <S.HeaderWrapper>
          <S.SearchWrapper>{/* <S.Search></S.Search> */}</S.SearchWrapper>
        </S.HeaderWrapper>
        <S.BoardWrapper>
          {boards.map((board) => (
            <Board title={board.boardTitle} board={board} />
          ))}
          <button onClick={handleAddboard}>보드 추가하기!</button>
        </S.BoardWrapper>
      </S.ContentWrapper>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
