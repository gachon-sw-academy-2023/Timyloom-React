import * as S from './SidebarStyle';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as Dashboard } from '@/assets/images/dashboard.svg';
import { ReactComponent as Setting } from '@/assets/images/setting.svg';
import { useState } from 'react';
import Board from '../Board/Board';

function Sidebar() {
  const [activeNavItem, setActiveNavItem] = useState('workspace');

  return (
    <S.SidebarWrapper>
      <S.LogoWrapper>
        <S.LogoLink to={'/'}>
          <Logo width="45px" height="45px" />
          <S.LogoText>TimyLoom</S.LogoText>
        </S.LogoLink>
      </S.LogoWrapper>
      <S.ItemWrapper>
        <S.NavItem className={({ isActive }) => (isActive ? 'active' : '')} to="/workspaces">
          <S.Icon>
            <Dashboard />
          </S.Icon>
          <S.ItemTitle>Workspace</S.ItemTitle>
        </S.NavItem>
        <S.NavItem className={({ isActive }) => (isActive ? 'active' : '')} to="/workspace">
          <S.Icon>
            <Setting />
          </S.Icon>
          <S.ItemTitle>Setting</S.ItemTitle>
        </S.NavItem>
      </S.ItemWrapper>
      <S.ViewsWrapper>
        <S.ViewsTitle>Workspace Views</S.ViewsTitle>
        <S.ViewsButtonsWrapper>
          <S.NavViews className={({ isActive }) => (isActive ? 'active' : '')} to="/dd">
            <S.ViewButton>
              <Setting width="35px" height="35px" />
            </S.ViewButton>
            <S.ViewTitle>Table</S.ViewTitle>
          </S.NavViews>
          <S.NavViews className={({ isActive }) => (isActive ? 'active' : '')} to="/workspace">
            <S.ViewButton>
              <Setting width="35px" height="35px" />
            </S.ViewButton>
            <S.ViewTitle>Calender</S.ViewTitle>
          </S.NavViews>
        </S.ViewsButtonsWrapper>
      </S.ViewsWrapper>
      <S.BoardsWrapper>
        <S.BoardsTitle>Your Boards</S.BoardsTitle>
        <S.BoardWrapper>
          ddddddd<br></br>ddd
        </S.BoardWrapper>
        <S.BoardWrapper>
          ddddddd<br></br>ddd
        </S.BoardWrapper>
        <S.BoardWrapper>
          ddddddd<br></br>ddd
        </S.BoardWrapper>
        <S.BoardWrapper>
          ddddddd<br></br>ddd
        </S.BoardWrapper>
      </S.BoardsWrapper>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
