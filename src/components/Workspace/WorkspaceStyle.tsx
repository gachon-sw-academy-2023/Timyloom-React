import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WorkspaceWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const ContentWrapper = styled.div`
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

export const ArticleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 93vh;
  min-width: 250px;
  background-color: ${(props) => props.theme.colors.primaryColor_1};
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
