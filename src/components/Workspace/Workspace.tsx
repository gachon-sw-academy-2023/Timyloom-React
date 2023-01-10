import React, { useEffect, useState } from 'react';
import * as S from './WorkspaceStyle';
import dodge from '@/assets/images/dodge.jpg';
import trello from '@/assets/images/Trello.png';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import { ReactComponent as Logo } from '@/assets/images/logo.svg';
import { ReactComponent as Dashboard } from '@/assets/images/dashboard.svg';
import { ReactComponent as Setting } from '@/assets/images/setting.svg';

function Workspace() {
  const handleLinkActive = () => {
    window.location.reload();
  };

  return (
    <S.Wrapper>
      <S.SideWrapper>
        <S.LogoWrapper>
          <S.LogoLink to={'/'}>
            <Logo width="40px" height="40px" />
            <S.LogoText>TimyLoom</S.LogoText>
          </S.LogoLink>
        </S.LogoWrapper>
        <S.ItemWrapper>
          <S.NavItem className={({ isActive }) => (isActive ? 'active' : '')} to="/login" onClick={handleLinkActive}>
            <S.Icon>
              <Setting width="45px" height="45px" />
            </S.Icon>
            <S.NameLink>Dashboard</S.NameLink>
          </S.NavItem>
          <S.NavItem
            className={({ isActive }) => (isActive ? 'active' : '')}
            to="/workspace"
            onClick={handleLinkActive}
          >
            <S.Icon>
              <Dashboard width="45px" height="45px" />
            </S.Icon>
            <S.NameLink>Setting</S.NameLink>
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
      </S.SideWrapper>
      <S.MainWrapper>
        <S.HeaderWrapper>
          <S.SearchWrapper>{/* <S.Search></S.Search> */}</S.SearchWrapper>
        </S.HeaderWrapper>
        <S.WorkspaceWrapper>dd</S.WorkspaceWrapper>
      </S.MainWrapper>
    </S.Wrapper>
  );
}

export default Workspace;
