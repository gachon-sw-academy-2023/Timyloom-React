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
  transform: translate(0, -30%);
  border-radius: 5px;
  font-size: 2rem;
  font-weight: bold;
  word-break: keep-all;
  z-index: 2;
`;
