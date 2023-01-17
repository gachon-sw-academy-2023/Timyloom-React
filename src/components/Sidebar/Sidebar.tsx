import * as S from './SidebarStyle';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as Dashboard } from '@/assets/images/dashboard.svg';
import { ReactComponent as Setting } from '@/assets/images/setting.svg';
import { useState } from 'react';

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
  return (
    <S.SidebarWrapper>
      <S.LogoWrapper>
        <S.LogoLink to={'/'}>
          <Logo width="45px" height="45px" />
          <S.LogoText>TimyLoom</S.LogoText>
        </S.LogoLink>
      </S.LogoWrapper>
      <S.ItemContainer>
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
      </S.ItemContainer>
      <S.ViewsWrapper>
        <S.ViewsTitle>Workspace Views</S.ViewsTitle>
        <S.ViewButtonsContainer>
          <S.NavView className={({ isActive }) => (isActive ? 'active' : '')} to="/dd">
            <S.ViewButton>
              <Setting width="35px" height="35px" />
            </S.ViewButton>
            <S.ViewTitle>Table</S.ViewTitle>
          </S.NavView>
          <S.NavView className={({ isActive }) => (isActive ? 'active' : '')} to="/workspace">
            <S.ViewButton>
              <Setting width="35px" height="35px" />
            </S.ViewButton>
            <S.ViewTitle>Calender</S.ViewTitle>
          </S.NavView>
        </S.ViewButtonsContainer>
      </S.ViewsWrapper>
      <S.BoardContainer>
        <S.BoardContainerTitle>Your Boards</S.BoardContainerTitle>
        {board.map((item, index) => (
          <S.BoardWrapper key={index} boardDesign={item.color}>
            {item.title}
          </S.BoardWrapper>
        ))}
      </S.BoardContainer>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
