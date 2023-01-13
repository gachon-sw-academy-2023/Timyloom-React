import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchSvg } from '@/assets/images/search.svg';
import { Avatar } from '@mui/material';

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

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
