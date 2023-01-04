import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  height: 5000px;
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
