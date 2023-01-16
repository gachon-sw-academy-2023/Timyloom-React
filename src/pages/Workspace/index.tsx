import Sidebar from '@/components/Sidebar/Sidebar';
import * as S from '@/pages/Workspace/indexStyle';
import { useRecoilState, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';
import { taskAtom } from '@/recoil/taskAtom';
import { ReactComponent as UserSvg } from '@/assets/images/userAvatar.svg';
import { Avatar } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { style } from 'styled-system';

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
        <Avatar>H</Avatar>
        <S.HeaderWrapper>
          <S.SearchWrapper>
            <S.Search type="search" placeholder="Search for Boards here"></S.Search>
            <S.SearchIcon />
          </S.SearchWrapper>
          <S.ProfileWrapper>
            <div>ddd</div>
            <Avatar>H</Avatar>
          </S.ProfileWrapper>
        </S.HeaderWrapper>
        <S.BoardContainer>
          {boards.map((board) => (
            // <Board title={board.boardTitle} board={board} />
            <S.BoardWrapper to={`/board/${board.boardId}`}>
              <S.BoardTitle className="title">{board.boardTitle}</S.BoardTitle>
              <S.ImageWrapper className="image" />
            </S.BoardWrapper>
          ))}
          <button onClick={handleAddboard}>보드 추가하기!</button>
        </S.BoardContainer>
      </S.ContentWrapper>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
