import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchSvg } from '@/assets/images/search.svg';
import { Avatar } from '@mui/material';
import boardbackground from '@/assets/images/backgroundimg.jpg';

export const SearchIcon = styled(SearchSvg)`
  position: absolute;
  pointer-events: none;
  top: 0.6rem;
  left: 0.5rem;
  width: 30px;
  height: 30px;
`;

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
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 12vh;
  border-bottom: 2px solid ${(props) => props.theme.gray_3};
  overflow: hidden;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 400px;
  margin: auto 30px;
  user-select: none;
  @media (max-width: 620px) {
  }
`;

export const Search = styled.input`
  width: 355px;
  height: 50px;
  background-color: ${(props) => props.theme.test1};
  border-radius: 10px;
  font-size: 17px;
  text-align: left;
  color: #696974;
  padding-left: 45px;
  padding-right: 20px;
  border: none;
  :focus {
  }
`;

export const ProfileWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  background-color: gray;
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    justify-items: end;
  }
`;

export const WithAvatarWrapper = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
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
