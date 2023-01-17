import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchSvg } from '@/assets/images/search.svg';
import { Avatar } from '@mui/material';
import boardbackground from '@/assets/images/backgroundimg.jpg';
import { ReactComponent as Add } from '@/assets/images/add.svg';
import { ReactComponent as UpArrow } from '@/assets/images/upArrow.svg';

export const WorkspaceWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  top: 20%;
  left: 50%;
  z-index: 1;
`;

export const BoardTitle = styled.div`
  margin: 10px;
  text-align: center;
  color: #000000;
  position: absolute;
  width: 200px;
  height: 60px;
  top: 30%;
  left: 0;
  transform: translate(0, -30%);
  border-radius: 5px;
  font-size: 2.5rem;
  font-weight: bold;
  word-break: keep-all;
  z-index: 2;
`;

export const BoardWrapper = styled(Link)`
  width: 440px;
  height: 286px;
  margin: 50px;
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

  &:hover ${ImageWrapper} {
    width: 440px;
    height: 286px;
    border-radius: 10px;
    top: 0;
    left: 0;
    transition: all 300ms;
  }

  &:hover ${BoardTitle} {
    color: #ffffff;
    text-shadow: -1px 0 #999999, 0 1px #999999, 1px 0 #999999, 0 -1px #999999;
    font-size: 2rem;
    top: 10%;
    left: 45%;
    transform: translate(-45%, -10%);
    width: 300px;
    transition: all 300ms;
  }
`;

export const AddSvg = styled((props) => <Add {...props} />)`
  width: 100%;
  height: 3rem;
  .st0 {
    fill: ${(props) => props.theme.gray_2};
  }
`;

export const AddBoardButton = styled.button`
  width: 440px;
  height: 286px;
  margin: 50px;
  position: relative;
  border: 0;
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px;
  box-shadow: #091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px;

  &:hover {
    box-shadow: #091e4240 0px 4px 8px -2px, #091e4214 0px 0px 0px 1px;
    background-color: #e0e0e0;
  }

  &:hover ${AddSvg} {
    .st0 {
      fill: ${(props) => props.theme.gray_1};
    }
  }
`;

export const ScrollToTopSvg = styled((props) => <UpArrow {...props} />)`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
  }
`;
