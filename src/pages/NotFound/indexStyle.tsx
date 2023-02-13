import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BackgroundImg from '@/assets/images/background404.jpg';

export const MainWrapper = styled.div`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`;

export const BodyWrapper = styled.div`
  padding: 0;
  margin: 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  height: 92.5vh;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImg});
  background-size: cover;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(160, 195, 255, 0.7);
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 910px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
`;

export const H1Wrapper = styled.div`
  position: relative;
  height: 200px;

  @media only screen and (max-width: 480px) {
    height: 146px;
  }
`;

export const H1Text = styled.h1`
  font-family: 'MontserratBlack', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 220px;
  margin: 0px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 10px;

  @media only screen and (max-width: 767px) {
    font-size: 182px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 146px;
  }
`;

export const H2Text = styled.h2`
  font-family: 'MontserratBold', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 15px;

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled(Link)`
  font-family: 'MontserratBold', sans-serif;
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid transparent;
  text-transform: uppercase;
  padding: 13px 25px;
  font-size: 18px;
  border-radius: 40px;
  margin: 7px;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  color: rgba(160, 195, 255, 0.7);
  background: #fff;

  &:hover {
    opacity: 0.9;
  }

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
