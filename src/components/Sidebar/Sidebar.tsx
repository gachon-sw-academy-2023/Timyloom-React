import * as S from './SidebarStyle';
import { AiOutlineLeft } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import { linksArray, secondaryLinksArray, board } from '@/components/Sidebar/SidebarData';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import { BoardData } from '@/type';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Function;
}

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const { pathname } = useLocation();
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const sortedBoards = boards
    .filter((board: BoardData) => board.owner === localStorage.getItem('id'))
    .sort(function (boardA: BoardData, boardB: BoardData) {
      return boardB.lastUpdate - boardA.lastUpdate;
    })
    .splice(0, 5);
  const navigate = useNavigate();

  const changeHandler = (e: MediaQueryListEvent) => {
    {
      mediaQueryList.matches ? setSidebarOpen(false) : setSidebarOpen(true);
    }
  };

  const handlePageMove = (boardId: string) => {
    navigate(`/workspace/${boardId}`);
    window.location.reload();
  };

  const mediaQueryList = window.matchMedia(`(max-width: 768px)`);
  mediaQueryList.addEventListener('change', changeHandler);
  console.log(sortedBoards);
  return (
    <S.SidebarWrapper $isopen={sidebarOpen}>
      <S.SidebarOpenButton $isopen={sidebarOpen} onClick={() => setSidebarOpen((prev: boolean) => !prev)}>
        <AiOutlineLeft />
      </S.SidebarOpenButton>
      <S.LogoLink to="/">
        <S.Logo $isopen={sidebarOpen}>Timyloom</S.Logo>
      </S.LogoLink>
      <S.Divider />
      {linksArray.map(({ icon, label, to }) => (
        <S.SLinkWrapper key={label} isActive={pathname === to}>
          <S.SLink to={to} $isopen={sidebarOpen}>
            <S.LinkIcon>{icon}</S.LinkIcon>
            {sidebarOpen && <S.LinkLabel>{label}</S.LinkLabel>}
          </S.SLink>
        </S.SLinkWrapper>
      ))}
      <S.Divider />
      <S.SidebarSubtitle $isopen={sidebarOpen}>Workspace Views</S.SidebarSubtitle>
      <S.ViewContainer $isopen={sidebarOpen}>
        {secondaryLinksArray.map(({ icon, label, to }) => (
          <S.SLinkWrapper key={label} isActive={pathname === to}>
            <S.SLink to={to} $isopen={sidebarOpen} $column={true}>
              <S.LinkIcon>{icon}</S.LinkIcon>
              {sidebarOpen && <S.LinkLabel $column={true}>{label}</S.LinkLabel>}
            </S.SLink>
          </S.SLinkWrapper>
        ))}
      </S.ViewContainer>
      <S.Divider />
      <S.SidebarSubtitle $isopen={sidebarOpen}>Your Boards</S.SidebarSubtitle>
      <S.BoardContainer $isopen={sidebarOpen}>
        {sortedBoards.map((board: BoardData, index: number) => (
          <S.BoardWrapper
            $isopen={sidebarOpen}
            key={index}
            onClick={() => {
              handlePageMove(board.boardId);
            }}
          >
            <S.BoardSquare boardDesign={board.backgroundColor}></S.BoardSquare>
            <S.BoardTitle $isopen={sidebarOpen}>{board.boardTitle}</S.BoardTitle>
          </S.BoardWrapper>
        ))}
      </S.BoardContainer>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
