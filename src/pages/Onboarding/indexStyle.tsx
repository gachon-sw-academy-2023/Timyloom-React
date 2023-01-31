import styled from 'styled-components';

interface fieldInterface {
  title: string;
  index: number;
  color: string;
  select: boolean;
  icon: JSX.Element;
}

export const MainWrapper = styled.div`
  width: 100vw;
  background-color: #eef4fe;
  padding: 0px 10vw;
`;

export const LeftContentsContainer = styled.div`
  text-align: center;
`;

export const Video = styled.video`
  @media (max-width: 768px) {
    width: 280px;
  }
`;

export const RightContentsContainer = styled.div`
  width: 700px;
  text-align: center;
  margin-top: 120px;
  @media (max-width: 900px) {
    width: 350px;
    margin-top: 0px;
  }
`;

export const BtnWrapper = styled.div`
  text-align: center;
`;

export const StartBtn = styled.button<{ gradationColor: string }>`
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
    width: 100px;
    height: 35px;
    font-size: 0.75rem;
  }
`;

export const Field = styled.div<{ field: fieldInterface }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
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
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin: 5px;

    border: ${(props) => (props.field.select ? `2px solid ${props.field.color}` : 'none')};
    &:hover {
      border: ${(props) => `2px solid ${props.field.color}`};
    }
    &:active {
      border: ${(props) => `3px solid ${props.field.color}`};
    }

    > :first-child {
      display: none;
    }

    > :last-child {
      font-size: 0.5rem;
      margin: auto;
    }
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
  font-size: 2.3rem;
  font-weight: bold;
  color: #063183;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;
