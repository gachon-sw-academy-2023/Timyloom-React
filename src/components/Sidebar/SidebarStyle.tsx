import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 100vh;
  background: ${(props) => props.theme.primaryColor_2};
  border: 1px solid ${(props) => props.theme.gray_3};
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12vh;
  padding: 0 30px;
  @media screen and (max-width: 620px) {
    padding: 0 10px;
  }
`;
export const LogoLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const LogoText = styled.div`
  padding: 0.3rem;
  font-size: 25px;
  color: ${(props) => props.theme.black_1};
  font-weight: bold;
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

export const ItemWrapper = styled.nav`
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
  margin-bottom: 15px;
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

  @media screen and (max-width: 620px) {
    &.active {
      width: 70px;
      margin-right: 10px;
    }
  }
`;
export const ItemTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.gray_2};

  @media (max-width: 620px) {
    display: none;
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
  @media (max-width: 620px) {
    display: none;
  }
`;

export const ViewsTitle = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.black_2};
  margin: 0 auto;
  padding: 15px 20px;
  border-bottom: 2px solid ${(props) => props.theme.gray_3};
`;

export const ViewsButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2px 10px;
`;

export const NavViews = styled(NavLink)`
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

export const BoardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  padding: 20px;
  @media (max-width: 620px) {
    display: none;
  }
`;

export const BoardsTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 2px solid ${(props) => props.theme.gray_2};
  padding: 10px 5px;
  margin-bottom: 15px;
  @media (max-width: 620px) {
    display: none;
  }
`;

export const BoardWrapper = styled.div`
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.gray_2};
  background-color: ${(props) => props.theme.purple};
  margin: 5px;
  padding: 5px;
  @media (max-width: 620px) {
    display: none;
  }
`;
