import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: 0.5px solid #6b6b6b2e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 15vw;
`;

export const ToggleWrapper = styled.div`
  display: none;
  color: #333333;
  font-size: 24px;
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
  font-size: 1.7rem;
  color: #333333;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    font-size: 1.3rem;
  }
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

export const LoginBtn = styled.button`
  width: 90px;
  height: 45px;
  font-size: 1.1rem;
  border: 0;
  border-radius: 10px;
  text-align: center;
  background-color: #a0c3ff;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    border-radius: 30px;
    background-color: #80aeff;
  }
  transition: all 100ms ease-in;
`;

export const SigninBtn = styled.button`
  width: 90px;
  height: 45px;
  font-size: 1.1rem;
  border: 0;
  border-radius: 10px;
  text-align: center;
  background-color: #ececec;
  color: #333333;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    border-radius: 30px;
    background-color: #dbdbdb;
    border: 0;
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

export const Logo = styled.div`
  color: #333333;
  font-family: 'Azonix';
`;
