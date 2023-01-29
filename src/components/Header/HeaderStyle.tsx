import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 0.5px solid #6b6b6b2e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 10vw;
`;

export const ToggleWrapper = styled.div`
  display: none;
  color: #ffffff;
  font-size: 24px;
  position: absolute;
  right: 20px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const LogoWrapper = styled.div`
  box-sizing: border-box;
  margin-left: 25px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  color: black;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  display: block;
  padding: 10px 10px;
`;

export const NavMenu = styled.ul<{ isToggleOpen: boolean }>`
  list-style: none;
  display: flex;
  margin: 0 15px;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? 'block' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

export const NavMenuContent = styled.li`
  border-radius: 10px;
  margin: 0 5px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
    border-radius: 20px;
  }
  transition: all 100ms ease-in;
`;

export const NameBox = styled.div`
  font-size: 1.3rem;
  color: #373737;
  &:hover {
    cursor: pointer;
    color: #96bcfb;
  }
`;

export const Test = styled.div`
  font-family: 'Azonix';
`;
