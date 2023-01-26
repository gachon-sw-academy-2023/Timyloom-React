import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  min-height: 100vh;
  padding: 15px;
  background: ${(props) => props.theme.primaryColor_2};
  border: 1px solid ${(props) => props.theme.gray_3};
  width: ${({ isOpen }) => (!isOpen ? `auto` : '300px')};
  box-shadow: -3px 0 5px 0 #555;
`;

export const SidebarOpenButton = styled.button<{ isOpen: boolean }>`
  border: none;
  position: absolute;
  top: 48px;
  right: ${({ isOpen }) => (!isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.theme.primaryColor_2};
  box-shadow: 0 0 4px #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const LogoLink = styled.div`
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

export const LogoText = styled.div<{ isOpen: boolean }>`
  padding: 0.3rem;
  font-size: 35px;
  color: gray;
  font-weight: bold;
  display: ${({ isOpen }) => (!isOpen ? 'none' : ``)};
  margin-left: 5px;
`;

export const Divider = styled.div`
  border: 1px solid ${(props) => props.theme.gray_2};
  width: 100%;
  margin: 0 0 15px;
`;

export const SLinkWrapper = styled.div<{ isActive: boolean }>`
  background: ${({ isActive, theme }) => (!isActive ? `transparent` : theme.primaryColor_1)};
  border-radius: 6px;
  margin: 8px 0;
  letter-spacing: 0.6px;

  :hover {
    box-shadow: inset 0 0 0 1px grey;
  }
`;

export const SLink = styled(Link)<{ isOpen: boolean; $column?: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: 6px 0;
  width: ${({ isOpen }) => (!isOpen ? 'fit-content' : `120px`)};
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
export const SidebarSubtitle = styled.div<{ isOpen: boolean }>`
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 5px;
  display: ${({ isOpen }) => (!isOpen ? 'none' : ``)};
`;

export const ViewContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (!isOpen ? '' : `flex`)};
  justify-content: space-between;
`;

export const BoardContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: ${({ isOpen }) => (!isOpen ? 'none' : ``)};
`;

export const BoardWrapper = styled.div<{ boardDesign?: string }>`
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.gray_2};
  background-color: ${(props) => props.boardDesign};
  margin: 5px;
  padding: 10px;
`;
