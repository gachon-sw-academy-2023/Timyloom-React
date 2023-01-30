import * as S from './SidebarStyle';
import { useState } from 'react';
import { AiOutlineHome, AiOutlineLeft, AiOutlineSetting, AiOutlineCalendar, AiOutlineTable } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

const linksArray = [
  {
    label: 'Workspace',
    icon: <AiOutlineHome />,
    to: '/workspace',
  },
  {
    label: 'Setting',
    icon: <AiOutlineSetting />,
    to: '/statistics',
  },
];

const secondaryLinksArray = [
  {
    label: 'Table',
    icon: <AiOutlineTable />,
    to: '/workspace',
  },
  {
    label: 'Calender',
    icon: <AiOutlineCalendar />,
    to: '',
  },
];

const board = [
  {
    title: 'Board1',
    link: '/',
    color: 'pink',
  },
  {
    title: 'Board2',
    link: '/messages',
    color: 'white',
  },
  {
    title: 'Board3',
    link: '/tasks',
    color: 'skyblue',
  },
];

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: Function;
};

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const { pathname } = useLocation();

  const changeHandler = (e: MediaQueryListEvent) => {
    {
      mediaQueryList.matches ? setSidebarOpen(false) : setSidebarOpen(true);
    }
  };

  const mediaQueryList = window.matchMedia(`(max-width: 768px)`);
  mediaQueryList.addEventListener('change', changeHandler);
  return (
    <S.SidebarWrapper isopen={sidebarOpen}>
      <S.SidebarOpenButton isopen={sidebarOpen} onClick={() => setSidebarOpen((prev: boolean) => !prev)}>
        <AiOutlineLeft />
      </S.SidebarOpenButton>
      <S.LogoLink>
        <S.Logo isopen={sidebarOpen} />
      </S.LogoLink>
      <S.Divider />
      {linksArray.map(({ icon, label, to }) => (
        <S.SLinkWrapper key={label} isActive={pathname === to}>
          <S.SLink to={to} isopen={sidebarOpen}>
            <S.LinkIcon>{icon}</S.LinkIcon>
            {sidebarOpen && <S.LinkLabel>{label}</S.LinkLabel>}
          </S.SLink>
        </S.SLinkWrapper>
      ))}
      <S.Divider />
      <S.SidebarSubtitle isopen={sidebarOpen}>Workspace Views</S.SidebarSubtitle>
      <S.ViewContainer isopen={sidebarOpen}>
        {secondaryLinksArray.map(({ icon, label, to }) => (
          <S.SLinkWrapper key={label} isActive={pathname === to}>
            <S.SLink to="/" isopen={sidebarOpen} $column={true}>
              <S.LinkIcon>{icon}</S.LinkIcon>
              {sidebarOpen && <S.LinkLabel $column={true}>{label}</S.LinkLabel>}
            </S.SLink>
          </S.SLinkWrapper>
        ))}
      </S.ViewContainer>
      <S.Divider />
      <S.SidebarSubtitle isopen={sidebarOpen}>Your Boards</S.SidebarSubtitle>
      <S.BoardContainer isopen={sidebarOpen}>
        {board.map((item, index) => (
          <S.BoardWrapper isopen={sidebarOpen} key={index}>
            <S.BoardSquare boardDesign={item.color}></S.BoardSquare>
            <S.BoardTitle isopen={sidebarOpen}>{item.title}</S.BoardTitle>
          </S.BoardWrapper>
        ))}
      </S.BoardContainer>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
