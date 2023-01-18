import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const SDivider = styled.div`
  height: 2px;
  width: 100%;
  background: ${(props) => props.theme.gray_2};
  margin: 0 0 24px;
`;

export const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  min-height: 100vh;
  padding: 24px;
  background: ${(props) => props.theme.primaryColor_2};
  border: 1px solid ${(props) => props.theme.gray_3};
  width: ${({ isOpen }) => (isOpen ? `auto` : '300px')};
`;

export const SidebarOpenButton = styled.button<{ isOpen: boolean }>`
  border: none;
  position: absolute;
  top: 48px;
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.theme.primaryColor_2};
  box-shadow: 0 0 4px #e6e6e6, 0 0 7px white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : `initial`)};
`;

export const LogoText = styled.div<{ isOpen: boolean }>`
  padding: 0.3rem;
  font-size: 25px;
  color: ${(props) => props.theme.black_1};
  font-weight: bold;
  display: ${({ isOpen }) => (isOpen ? 'none' : ``)};
  margin-left: 5px;
  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`;

export const ItemContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 25px;
`;
export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 0.5px;
  margin-bottom: 24px;
  padding: 12px 10px;

  &.active {
    background-color: ${(props) => props.theme.primaryColor_1};
    border-radius: 0 30px 30px 0;
    width: 220px;

    svg {
      fill: ${(props) => props.theme.black_1};
    }
    span {
      color: ${(props) => props.theme.black_1};
    }
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.test2};
    }
    span {
      color: ${(props) => props.theme.test2};
    }
  }

  @media screen and (max-width: 768px) {
    &.active {
      width: 70px;
      margin-right: 10px;
    }
  }
`;
export const Icon = styled.div`
  margin: 5px 20px auto 15px;
  svg {
    fill: ${(props) => props.theme.gray_2};
    width: 25px;
    height: 25px;
  }
`;

export const ViewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 2px solid ${(props) => props.theme.gray_3};
  border-radius: 30px;
  background-color: ${(props) => props.theme.test2};
  margin: 0 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ViewButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2px 10px;
`;

export const NavView = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  text-decoration: none;

  &:hover {
    div {
      background-color: ${(props) => props.theme.secondaryColor};
    }
    svg {
      fill: ${(props) => props.theme.test2};
    }
    span {
      color: ${(props) => props.theme.black_1};
    }
  }

  &.active {
    div {
      background-color: ${(props) => props.theme.primaryColor_1};
    }
    svg {
      fill: ${(props) => props.theme.white};
    }
    span {
      color: ${(props) => props.theme.black_1};
    }
  }
`;

export const ViewButton = styled.div`
  border: 2px solid ${(props) => props.theme.gray_3};
  border-radius: 30px;
  padding: 10px 20px 8px;
  margin: 2px auto;
  background-color: ${(props) => props.theme.white};
`;

export const ViewTitle = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.gray_2};
  margin: 5px auto 0;
`;

export const BoardContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  display: ${({ isOpen }) => (isOpen ? 'none' : ``)};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BoardContainerTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 2px solid ${(props) => props.theme.gray_2};
  padding: 10px 5px;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BoardWrapper = styled.div<{ boardDesign?: string }>`
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.gray_2};
  background-color: ${(props) => props.boardDesign};
  margin: 5px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: left;
  text-decoration: none;

  svg {
    height: auto;
    width: 52px;
  }
  cursor: pointer;
  height: 80px;
  margin-bottom: 5px;
`;

export const SLinkContainer = styled.div<{ isActive: boolean }>`
  background: ${({ isActive, theme }) => (!isActive ? `transparent` : theme.primaryColor_1)};
  border-radius: 6px;
  margin: 8px 0;
  letter-spacing: 0.6px;

  :hover {
    box-shadow: inset 0 0 0 1px gray;
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: 6px 0;
`;

export const SLinkIcon = styled.div`
  padding: 8px 16px;
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: 8px;
  padding-right: 100px;
`;
export const ViewsTitle = styled.div<{ isOpen: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 5px;
  display: ${({ isOpen }) => (isOpen ? 'none' : ``)};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
