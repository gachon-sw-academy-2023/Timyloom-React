import * as S from './SidebarStyle';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as Dashboard } from '@/assets/images/dashboard.svg';
import { ReactComponent as Setting } from '@/assets/images/setting.svg';
import { useState } from 'react';

function Sidebar() {
  const [activeNavItem, setActiveNavItem] = useState('workspace');

  return (
    <S.SidebarWrapper>
      <S.LogoWrapper>
        <S.LogoLink to={'/'}>
          <Logo width="40px" height="40px" />
          <S.LogoText>TimyLoom</S.LogoText>
        </S.LogoLink>
      </S.LogoWrapper>
      <S.ItemWrapper>
        <S.NavItem className={({ isActive }) => (isActive ? 'active' : '')} to="/workspace">
          <S.Icon>
            <Dashboard width="45px" height="45px" />
          </S.Icon>
          <S.ItemTitle>Workspace</S.ItemTitle>
        </S.NavItem>
        <S.NavItem className={({ isActive }) => (isActive ? 'active' : '')} to="/workspaces">
          <S.Icon>
            <Setting width="45px" height="45px" />
          </S.Icon>
          <S.ItemTitle>Setting</S.ItemTitle>
        </S.NavItem>
      </S.ItemWrapper>
      <S.ViewsWrapper>
        <S.ViewsTitle>Workspace Views</S.ViewsTitle>
        <S.ViewsButtonsWrapper>
          <S.ViewsButton>
            <Setting width="45px" height="45px" />
          </S.ViewsButton>
          <S.ViewsButton>
            <Setting width="45px" height="45px" />
          </S.ViewsButton>
        </S.ViewsButtonsWrapper>
      </S.ViewsWrapper>
      <S.BoardsWrapper>
        <S.BoardsTitle>Your Boards</S.BoardsTitle>
      </S.BoardsWrapper>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
