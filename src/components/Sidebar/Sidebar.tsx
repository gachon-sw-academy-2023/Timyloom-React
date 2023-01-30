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

function Sidebar({ sidebarOpen, setSidebarOpen }: any) {
  const { pathname } = useLocation();

  const changeHandler = (e: MediaQueryListEvent) => {
    {
      mediaQueryList.matches ? setSidebarOpen(false) : setSidebarOpen(true);
    }
  };

  const mediaQueryList = window.matchMedia(`(max-width: 768px)`);
  mediaQueryList.addEventListener('change', changeHandler);

  return (
    <S.SidebarWrapper isOpen={sidebarOpen}>
      <S.SidebarOpenButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
        <AiOutlineLeft />
      </S.SidebarOpenButton>
      <S.LogoLink>
        <S.Logo isOpen={sidebarOpen} />
      </S.LogoLink>
      <S.Divider />
      {linksArray.map(({ icon, label, to }) => (
        <S.SLinkWrapper key={label} isActive={pathname === to}>
          <S.SLink to={to} isOpen={sidebarOpen}>
            <S.LinkIcon>{icon}</S.LinkIcon>
            {sidebarOpen && <S.LinkLabel>{label}</S.LinkLabel>}
          </S.SLink>
        </S.SLinkWrapper>
      ))}
      <S.Divider />
      <S.SidebarSubtitle isOpen={sidebarOpen}>Workspace Views</S.SidebarSubtitle>
      <S.ViewContainer isOpen={sidebarOpen}>
        {secondaryLinksArray.map(({ icon, label, to }) => (
          <S.SLinkWrapper key={label} isActive={pathname === to}>
            <S.SLink to="/" isOpen={sidebarOpen} $column={true}>
              <S.LinkIcon>{icon}</S.LinkIcon>
              {sidebarOpen && <S.LinkLabel $column={true}>{label}</S.LinkLabel>}
            </S.SLink>
          </S.SLinkWrapper>
        ))}
      </S.ViewContainer>
      <S.Divider />
      <S.SidebarSubtitle isOpen={sidebarOpen}>Your Boards</S.SidebarSubtitle>
      <S.BoardContainer isOpen={sidebarOpen}>
        {board.map((item, index) => (
          <S.BoardWrapper isOpen={sidebarOpen} key={index}>
            <S.BoardSquare boardDesign={item.color}></S.BoardSquare>
            <S.BoardTitle isOpen={sidebarOpen}>{item.title}</S.BoardTitle>
          </S.BoardWrapper>
        ))}
      </S.BoardContainer>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
