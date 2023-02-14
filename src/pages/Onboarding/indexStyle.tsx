import styled from 'styled-components';

interface fieldInterface {
  title: string;
  index: number;
  color: string;
  select: boolean;
  icon: JSX.Element;
}

export const MainWrapper = styled.div`
  background-color: #eef4fe;
  display: flex;
  flex-direction: column;
`;

export const LeftContentsContainer = styled.div`
  padding: 0 10vw;
`;

export const Video = styled.video`
  margin: auto;
  display: block;

  @media (max-width: 1028px) {
    width: 90%;
  }
`;

export const RightContentsContainer = styled.div`
  width: 700px;
  text-align: center;
  margin: 100px auto 60px;

  @media (max-width: 768px) {
    width: 400px;
    margin: 20px auto 60px;
  }

  @media (max-width: 425px) {
    margin: 20px auto 60px;
    width: 300px;
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
  @media (max-width: 768px) {
    width: 150px;
    height: 50px;
    font-size: 1rem;
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
    width: 80px;
    height: 80px;
    margin: 5px;

    border: ${(props) => (props.field.select ? `2px solid ${props.field.color}` : 'none')};
    &:hover {
      border: ${(props) => `2px solid ${props.field.color}`};
    }
    &:active {
      border: ${(props) => `3px solid ${props.field.color}`};
    }

    > :first-child {
      display: flex;
      margin: auto;
    }

    > :last-child {
      font-size: 0.7rem;
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

  @media (max-width: 768px) {
    width: 370px;
    margin: auto;
  }
  @media (max-width: 425px) {
    width: 200px;
    margin: auto;
  }
`;

export const MainTitle = styled.div`
  font-size: 2.3rem;
  font-weight: bold;
  color: #063183;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;
