import * as S from './SidebarStyle';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as Dashboard } from '@/assets/images/dashboard.svg';
import { ReactComponent as Setting } from '@/assets/images/setting.svg';
import { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineLeft, AiOutlineSetting, AiOutlineCalendar, AiOutlineTable } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalView = styled.div`
  text-align: center;
  text-decoration: none;
  padding: 30px 90px;
  background-color: white;
  width: 20vw;
  height: 60vh;
  border-radius: 30px;
  color: #4000c7;
`;

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
    to: '',
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

function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const changeHandler = (e: MediaQueryListEvent) => {
    {
      mediaQueryList.matches ? setSidebarOpen(true) : setSidebarOpen(false);
    }
  };

  const mediaQueryList = window.matchMedia(`(max-width: 768px)`);
  mediaQueryList.addEventListener('change', changeHandler);

  return (
    <>
      <S.SidebarWrapper isOpen={sidebarOpen}>
        <S.SidebarOpenButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
          <AiOutlineLeft />
        </S.SidebarOpenButton>
        <S.LogoLink to={'/'}>
          <Logo width="45px" height="45px" />
          <S.LogoText isOpen={sidebarOpen}>Timyloom</S.LogoText>
        </S.LogoLink>
        <S.Divider />
        {linksArray.map(({ icon, label, to }) => (
          <S.SLinkWrapper key={label} isActive={pathname === to}>
            <S.SLink to={to} style={sidebarOpen ? { width: `fit-content` } : {}}>
              <S.LinkIcon>{icon}</S.LinkIcon>
              {!sidebarOpen && <S.LinkLabel>{label}</S.LinkLabel>}
            </S.SLink>
          </S.SLinkWrapper>
        ))}
        <S.SidebarSubtitle isOpen={sidebarOpen}>Workspace Views</S.SidebarSubtitle>
        <S.Divider />
        <S.ViewContainer isOpen={sidebarOpen}>
          {secondaryLinksArray.map(({ icon, label, to }) => (
            <S.SLinkWrapper key={label} isActive={pathname === to}>
              <S.SLink
                to="/"
                style={sidebarOpen ? { width: `fit-content` } : { width: '120px', flexDirection: 'column' }}
              >
                <S.LinkIcon>{icon}</S.LinkIcon>
                {!sidebarOpen && <S.LinkLabel style={{ paddingRight: '0px' }}>{label}</S.LinkLabel>}
              </S.SLink>
            </S.SLinkWrapper>
          ))}
        </S.ViewContainer>
        <S.SidebarSubtitle isOpen={sidebarOpen}>Your Boards</S.SidebarSubtitle>
        <S.Divider />
        <S.BoardContainer isOpen={sidebarOpen}>
          {board.map((item, index) => (
            <S.BoardWrapper key={index} boardDesign={item.color} onClick={openModalHandler}>
              {item.title}
            </S.BoardWrapper>
          ))}
        </S.BoardContainer>
      </S.SidebarWrapper>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView>
            <div onClick={openModalHandler}>&times;</div>
            <div>Hello World</div>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
}

export default Sidebar;
