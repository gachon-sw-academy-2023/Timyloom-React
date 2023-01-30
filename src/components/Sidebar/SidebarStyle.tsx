import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logos_orange from '@/assets/images/timyloom_logo_orange.png';

export const SidebarWrapper = styled.div<{ isopen: boolean }>`
  position: relative;
  background: ${(props) => props.theme.primaryColor_1};
  width: ${({ isopen }) => (!isopen ? `auto` : '250px')};
  height: 100vh;

  padding: ${({ isopen }) => (!isopen ? `24px 5px` : '24px 12px')};
  border: 1px solid ${(props) => props.theme.gray_3};
  box-shadow: -3px 0 5px 0 #555;
  font-weight: 200;
`;

export const SidebarOpenButton = styled.button<{ isopen: boolean }>`
  border: none;
  position: absolute;
  top: 48px;
  right: ${({ isopen }) => (isopen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.theme.primaryColor_1};
  box-shadow: 0 0 4px gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isopen }) => (!isopen ? `rotate(180deg)` : `initial`)};
`;

export const LogoLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  svg {
    height: auto;
    width: 52px;
  }
  cursor: pointer;
  height: 90px;
  margin-bottom: 24px;
`;

export const Logo = styled.div<{ isopen: boolean }>`
  display: ${({ isopen }) => (!isopen ? 'none' : ``)};
  background-image: url(${Logos_orange});
  background-size: contain;
  background-repeat: no-repeat;
  width: 190px;
  height: 50px;
`;
export const LogoText = styled.div<{ isopen: boolean }>`
  padding: 0.3rem;
  font-size: 35px;
  color: gray;
  font-weight: bold;
  display: ${({ isopen }) => (!isopen ? 'none' : ``)};
  margin-left: 5px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #e2e2ea;
  margin: 10px 0;
`;

export const SLinkWrapper = styled.div<{ isActive: boolean }>`
  background: ${({ isActive, theme }) => (!isActive ? `transparent` : theme.secondaryColor)};
  border-radius: 6px;
  margin: 8px 0;
  letter-spacing: 0.6px;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }

  :hover {
    box-shadow: inset 0 0 0 1px grey;
  }
`;

export const SLink = styled(Link)<{ isopen: boolean; $column?: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: 6px 0;
  width: ${({ isopen }) => (!isopen ? 'fit-content' : `100px`)};
  flex-direction: ${({ $column }) => ($column ? 'column' : `row`)};
`;

export const LinkIcon = styled.div`
  padding: 8px 16px;
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const LinkLabel = styled.span<{ $column?: boolean }>`
  display: block;
  flex: 1;
  margin-left: 8px;
  padding-right: ${({ $column }) => ($column ? '5px' : `100px`)};
`;
export const SidebarSubtitle = styled.div<{ isopen: boolean }>`
  display: ${({ isopen }) => (!isopen ? 'none' : ``)};
  padding: 15px 8px;
  color: gray;
  align-items: center;
  font-size: 14px;
`;

export const ViewContainer = styled.div<{ isopen: boolean }>`
  display: ${({ isopen }) => (!isopen ? '' : `flex`)};
  justify-content: space-between;
`;

export const BoardContainer = styled.div<{ isopen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoardWrapper = styled.div<{ isopen: boolean }>`
  justify-content: ${({ isopen }) => (!isopen ? 'center' : `left`)};
  align-items: center;
  display: flex;
`;

export const BoardSquare = styled.div<{ boardDesign?: string }>`
  border-radius: 5px;
  border: 1px solid ${(props) => props.boardDesign};
  background-color: ${(props) => props.boardDesign};
  margin: 8px;
  padding: 10px;
`;

export const BoardTitle = styled.div<{ isopen: boolean }>`
  padding-left: 15px;
  font-size: 17px;
  display: ${({ isopen }) => (!isopen ? 'none' : ``)};
`;
