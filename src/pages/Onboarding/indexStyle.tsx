import styled from 'styled-components';
import onboardingMain from '@/assets/images/onboardingMain.png';

export const MainWrapper = styled.div`
  width: 100%;
  /* background-color: ${(props) => props.theme.primaryColor_2}; */
  background-color: #eef4fe;
  margin: 0;
`;

export const MainImg = styled.div`
  width: 45vw;
  height: 45vw;
  min-width: 300px;
  min-height: 300px;
  background-image: url(${onboardingMain});
  background-repeat: repeat;
  background-size: cover;
  margin: auto;
`;

export const ContentsWrapper = styled.div`
  box-sizing: border-box;
  text-align: center;
  margin-top: 60px;
  @media (max-width: 900px) {
    margin-top: 0px;
  }
`;

export const BtnWrapper = styled.div`
  text-align: center;
`;

export const StartBtn = styled.button<{ gradationColor: any }>`
  width: 200px;
  height: 70px;
  font-size: 1.5rem;
  margin: 30px 0px 0px 0px;
  background-color: ${(props) => (props.gradationColor != '' ? `${props.gradationColor}` : `#a0c3ff`)};
  background-image: ${(props) =>
    props.gradationColor ? `linear-gradient(to right,${props.gradationColor} )` : 'none'};
  color: #fff;
  border-radius: 30px;
  border: 0;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: max(75px, 10vw);
    height: max(30px, 4vw);
  }
`;

export const MainContent = styled.div<{ fontSize?: string; fontWeight?: string; color?: string }>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '3vw')};
  font-weight: ${(props) => (props.fontWeight ? 'none' : 'bold')};
  color: ${(props) => (props.color ? props.color : 'black')};
  @media (max-width: 900px) {
    font-size: max(3vw, 40px);
  }
`;

export const PhotoDiv = styled.div`
  width: 80%;
  height: 700px;
  background-color: beige;
  margin: 30px auto;
`;

export const ContextDiv = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  padding: 50px 7vw;
  span {
    color: #494949;
  }
  strong {
    font-size: 3vw;
    color: #2c2c2c;
    margin-right: 10px;
  }
`;

export const ContextWrapperL = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`;

export const ContextWrapperR = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 50px;
  @media (max-width: 768px) {
    top: 0;
  }
`;

export const ContextTitleBlock = styled.div`
  text-align: left;
`;

export const TextWrapper = styled.div`
  float: left;
  height: 100%;
  margin: auto;
`;

export const PhotoWrapper = styled.div`
  float: right;
  width: 50%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

export const TextDiv = styled.div`
  margin: 50px 10px;
`;

export const BlankDiv = styled.div`
  height: 200px;
`;

export const HorizontalLine = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #aaa;
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

export const DodgeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Field = styled.div<{ field: any }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  background-color: #ffffff;
  color: #333333;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 8px 24px 0 rgb(0 28 81 / 15%);
  border: ${(props) => (props.field.select ? `4px solid ${props.field.color}` : 'none')};
  cursor: pointer;
  &:hover {
    border: ${(props) => `4px solid ${props.field.color}`};
  }
  &:active {
    border: ${(props) => `6px solid ${props.field.color}`};
  }
`;

export const Title = styled.div`
  margin-top: 20px;
  font-size: 1.1rem;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const MainTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #063183;
  margin-bottom: 20px;
`;
export const MainDescription = styled.div`
  font-size: 1.2rem;
  color: #0e0e0e;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
`;
