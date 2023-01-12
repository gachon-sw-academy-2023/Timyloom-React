import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 100vh;
  background: ${(props) => props.theme.colors.primaryColor_2};
  border-right: 1px solid ${(props) => props.theme.colors.gray_3};
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
`;
export const LogoLink = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 10px;
`;

export const LogoText = styled.div`
  padding: 5px;
  font-size: 24px;
  color: gray;
  font-weight: bold;
  @media (max-width: 620px) {
    display: none;
    padding: 0;
    margin: 0;
  }
`;

export const ItemWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 30px;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 0.1px;
  margin: 5px;
  padding: 5px 0px;

  svg {
    fill: ${(props) => props.theme.colors.gray_2};
    width: 22px;
    height: 22px;
  }

  &.active {
    background-color: ${(props) => props.theme.colors.secondaryColor};
    padding: 10px 0px;
    border-radius: 0 20px 20px 0;
    width: 200px;

    svg {
      fill: ${(props) => props.theme.colors.black_1};
    }
    span {
      color: ${(props) => props.theme.colors.black_1};
    }
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.colors.gray_1};
    }
  }

  @media (max-width: 620px) {
    &.active {
      width: 80px;
    }
  }
`;

export const Icon = styled.div`
  margin: 0 24px;
`;

export const ItemTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray_2};
  @media (max-width: 620px) {
    display: none;
  }
`;

export const ViewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.primaryColor_1};
  margin: 10px;
  @media (max-width: 620px) {
    display: none;
  }
`;

export const ViewsTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_2};
`;

export const ViewsButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const ViewsButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.gray_2};
  border-radius: 50px;
  width: 80px;
  height: 70px;
  font-size: 2vw;
  padding: 12px;
  background-color: white;
  color: black;
  border: 0;
`;

export const BoardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  @media (max-width: 620px) {
    display: none;
  }
`;

export const BoardsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_2};
  margin: 10px;
  padding: 10px;
  @media (max-width: 620px) {
    display: none;
  }
`;
