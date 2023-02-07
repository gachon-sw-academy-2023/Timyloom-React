import styled from 'styled-components';
import { Link } from 'react-router-dom';
import boardbackground from '@/assets/images/backgroundimg.jpg';
import { ReactComponent as Add } from '@/assets/images/add.svg';
import { ReactComponent as UpArrow } from '@/assets/images/upArrow.svg';
import Skeleton from '@mui/material/Skeleton';

export const WorkspaceWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;

export const ContentWrapper = styled.div<{ isopen: boolean }>`
  display: flex;
  margin-left: ${({ isopen }) => (!isopen ? `7%` : `3%`)};

  @media screen and (max-width: 768px) {
    margin-left: ${({ isopen }) => (!isopen ? `7%` : `15%`)};
  }

  @media screen and (max-width: 425px) {
    margin-left: ${({ isopen }) => (!isopen ? `4%` : `0`)};
  }
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
`;

export const ImageWrapper = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 170%;
  border-radius: 100%;
  background-color: ${(props) => `${props.backgroundColor}`};
  position: absolute;
  top: 20%;
  left: 50%;
  z-index: 1;

  @media screen and (max-width: 425px) {
    height: 110%;
    top: 50%;
  }
`;

export const BoardTitle = styled.div`
  margin: 10px;
  text-align: center;
  color: #000000;
  position: absolute;
  width: 100px;
  height: 30px;
  top: 20%;
  left: 0;
  transform: translate(0, -30%);
  border-radius: 5px;
  font-size: 1.7rem;
  font-weight: bold;
  word-break: keep-all;
  z-index: 2;

  @media screen and (max-width: 425px) {
    width: 100px;
    height: 30px;
    font-size: 1.4rem;
  }
`;

export const BoardWrapper = styled(Link)`
  width: 255px;
  height: 170px;
  margin: 25px;
  position: relative;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-size: 0.7rem;
  overflow: hidden;
  box-shadow: #091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px;

  &:hover {
    box-shadow: #091e4240 0px 4px 8px -2px, #091e4214 0px 0px 0px 1px;
  }

  &:hover ${ImageWrapper} {
    width: 255px;
    height: 170px;
    border-radius: 10px;
    top: 0;
    left: 0;
    transition: all 300ms;
  }

  &:hover ${BoardTitle} {
    font-size: 1.4rem;
    top: 10%;
    left: 40%;
    transform: translate(-45%, -10%);
    width: 300px;
    transition: all 300ms;
  }

  @media screen and (max-width: 425px) {
    width: 200px;
    height: 200px;
    margin: 20px;

    &:hover ${ImageWrapper} {
      width: 200px;
      height: 200px;
    }

    &:hover ${BoardTitle} {
      font-size: 1.1rem;
      top: 10%;
      left: 35%;
      transform: translate(-35%, -10%);
      width: 150px;
      transition: all 300ms;
    }
  }
`;

export const AddSvg = styled((props) => <Add {...props} />)`
  width: 100%;
  height: 3rem;
  margin-top: 10px;
  .st0 {
    fill: ${(props) => props.theme.gray_2};
  }
`;

export const AddBoardButton = styled.button`
  width: 255px;
  height: 170px;
  margin: 25px;
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

  @media screen and (max-width: 425px) {
    width: 200px;
    height: 200px;
    margin: 20px;
    font-size: 1.2rem;
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

  @media screen and (max-width: 425px) {
    width: 40px;
    height: 40px;
  }
`;

export const SkeletonWrapper = styled.div`
  width: 255px;
  height: 170px;
  margin: 25px;
  position: relative;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  font-size: 0.7rem;
  overflow: hidden;
`;
