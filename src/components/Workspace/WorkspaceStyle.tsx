import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 250px;
  height: 100vh;
  background: ${(props) => props.theme.colors.primaryColor_2};
  border-right: 1px solid ${(props) => props.theme.colors.gray_3};
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  background-color: white;
`;

export const HeaderWrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 7vh;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray_3};
`;

export const WorkspaceWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 93vh;
  min-width: 250px;
  background-color: ${(props) => props.theme.colors.primaryColor_1};
`;
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  /* border-bottom: 1px solid ${(props) => props.theme.colors.gray_2}; */
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
  color: black;
  font-size: 14px;
  letter-spacing: 0.1px;
  margin: 10px;
  padding: 5px;

  svg {
    fill: #92929d;
    width: 22px;
    height: 22px;
  }
  &.active {
    background-color: ${(props) => props.theme.colors.secondaryColor};
    border: 3px solid ${(props) => props.theme.colors.secondaryColor};
    border-radius: 10px;
    width: 200px;
    svg {
      fill: ${(props) => props.theme.colors.black_1};
    }
  }
  &:hover {
    svg {
      fill: ${(props) => props.theme.colors.secondaryColor};
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
export const NameLink = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
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

export const SearchWrapper = styled.div`
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  background-color: gray;
  width: 500px;
  padding: 1rem;
  margin: auto 10px;
  height: 1rem;
  border-radius: 10px;
`;

// export const Search = styled.input`
//     color : black;
//     font-size: 20px;
//     width: 100%;
//     border: none;
//     ::placeholder {
//         font-size: 16px;
//     }
// `;
