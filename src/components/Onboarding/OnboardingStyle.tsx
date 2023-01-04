import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  background-color: #ccc1be;
  margin: 0;
`;

export const ImgWrapper = styled.div`
  padding-left: 30px;
  text-align: right;
`;

export const ContentsWrapper = styled.div`
  box-sizing: border-box;
  padding-right: 50px;
  text-align: center;
`;

export const BtnWrapper = styled.div`
  text-align: center;
`;
export const StartBtn = styled.button`
  width: 10vw;
  height: 4vw;
  font-size: 2vw;
  margin: 3vw 0px 0px 0px;
  background-color: #f38704;
  color: #fff;
  border-radius: 30px;
  border: 0px;
  &:hover {
    cursor: pointer;
  }
`;

export const MainContent = styled.div<{ fontSize?: string; fontWeight?: string; color?: string }>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '3vw')};
  font-weight: ${(props) => (props.fontWeight ? 'none' : 'bold')};
  color: ${(props) => (props.color ? props.color : 'black')};
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
