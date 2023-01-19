import * as S from './SidebarStyle';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as Dashboard } from '@/assets/images/dashboard.svg';
import { ReactComponent as Setting } from '@/assets/images/setting.svg';
import { useState, useEffect } from 'react';
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

  const [matches, setMatches] = useState(false);
  function useMediaQuery(query: any) {
    useEffect(() => {
      const matchQueryList = window.matchMedia(query);
      function handleChange(e: any) {
        setMatches(e.matches);
      }
      matchQueryList.addEventListener('change', handleChange);
      return () => {
        matchQueryList.removeEventListener('change', handleChange);
      };
    }, [query]);
    return matches;
  }

  console.log(useMediaQuery('min-width: 200px)'));
  console.log(matches);
  return (
    <S.SidebarWrapper isOpen={sidebarOpen}>
      <S.SidebarOpenButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
        <AiOutlineLeft />
      </S.SidebarOpenButton>
      <S.LogoLink to={'/'}>
        <Logo width="45px" height="45px" />
        <S.LogoText isOpen={sidebarOpen}>Timyloom</S.LogoText>
      </S.LogoLink>
      <S.SDivider />
      {linksArray.map(({ icon, label, to }) => (
        <S.LinkWrapper key={label} isActive={pathname === to}>
          <S.SLink to={to} style={sidebarOpen ? { width: `fit-content` } : {}}>
            <S.SLinkIcon>{icon}</S.SLinkIcon>
            {!sidebarOpen && <S.SLinkLabel>{label}</S.SLinkLabel>}
          </S.SLink>
        </S.LinkWrapper>
      ))}
      <S.ViewsTitle isOpen={sidebarOpen}>Workspace Views</S.ViewsTitle>
      <S.SDivider />
      <S.ViewContainer isOpen={sidebarOpen}>
        {secondaryLinksArray.map(({ icon, label, to }) => (
          <S.LinkWrapper key={label} isActive={pathname === to}>
            <S.SLink
              to="/"
              style={sidebarOpen ? { width: `fit-content` } : { width: '120px', flexDirection: 'column' }}
            >
              <S.SLinkIcon>{icon}</S.SLinkIcon>
              {!sidebarOpen && <S.SLinkLabel style={{ paddingRight: '0px' }}>{label}</S.SLinkLabel>}
            </S.SLink>
          </S.LinkWrapper>
        ))}
      </S.ViewContainer>

      <S.BoardContainer isOpen={sidebarOpen}>
        <S.BoardContainerTitle>Your Boards</S.BoardContainerTitle>
        {board.map((item, index) => (
          <S.BoardWrapper
            onClick={() => {
              useMediaQuery('min-width: 200px)');
            }}
            key={index}
            boardDesign={item.color}
          >
            {item.title}
          </S.BoardWrapper>
        ))}
      </S.BoardContainer>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
