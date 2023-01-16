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

export const BoardWrapper = styled(Link)`
  width: 400px;
  height: 260px;
  margin: 30px;
  position: relative;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-size: 1rem;
  overflow: hidden;
  box-shadow: #091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px;

  &:hover {
    box-shadow: #091e4240 0px 4px 8px -2px, #091e4214 0px 0px 0px 1px;
  }

  &:hover .image {
    width: 400px;
    height: 260px;
    border-radius: 10px;
    top: 0;
    left: 0;
    transition: all 400ms;
  }

  &:hover .title {
    color: #ffffff;
    text-shadow: -1px 0 #999999, 0 1px #999999, 1px 0 #999999, 0 -1px #999999;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    width: 300px;
    transition: all 400ms;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 170%;
  border-radius: 100%;
  background-image: url(${boardbackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 30%;
  left: 50%;
  z-index: 1;
`;

export const BoardTitle = styled.div`
  margin: auto;
  border: 0;
  text-align: center;
  color: #000000;
  position: absolute;
  width: 200px;
  height: 60px;
  top: 30%;
  left: 0;
  transform: translate(0, -30%);
  border-radius: 5px;
  font-size: 2rem;
  font-weight: bold;
  word-break: keep-all;
  z-index: 2;
`;

export const AddBoardButton = styled.button`
  width: 400px;
  height: 260px;
  margin: 30px;
  position: relative;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
`;
