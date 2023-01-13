import styled from 'styled-components';
import { Link } from 'react-router-dom';
import boardbackground from '@/assets/images/backgroundimg.jpg';

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

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HeaderWrapper = styled.div`
  background-color: white;
  display: flex;
  width: 100%;
  height: 7vh;
  border-bottom: 1px solid ${(props) => props.theme.gray_3};
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

export const BoardWrapper = styled.div`
  background-image: url(${boardbackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  height: 130px;
  margin: 30px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-size: 1rem;
`;

export const BoardTitle = styled.input`
  background-color: #ff0000fc;
  border: 0;
  text-align: center;
  width: 180px;
  height: 30px;
  border-radius: 5px;
  font-size: 1rem;

  ::placeholder {
    color: black;
  }

  &:focus {
    background-color: #ffffff;
    border: 2px solid black;
  }
`;
