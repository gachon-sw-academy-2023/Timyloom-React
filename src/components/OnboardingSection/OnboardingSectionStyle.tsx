import styled from 'styled-components';

export const InfoContainer = styled.div<{ lightTheme?: boolean }>`
  background: ${({ lightTheme }) => (lightTheme ? '#f9f9f9' : '#eef4fe')};
  @media screen and (max-width: 1024px) {
    padding: 100px 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100% auto;
  margin: auto;
  padding: 0 70px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const InfoRow = styled.div<{ imgStart?: boolean }>`
  display: grid;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `minmax(auto, 1.5fr) minmax(max-content, 1fr)` : `minmax(max-content, 1fr) minmax(auto, 1.5fr)`};
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'imgbox textbox'` : `'textbox imgbox'`)};

  @media screen and (max-width: 1024px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'textbox' 'imgbox'` : `'textbox' 'imgbox'`)};
  }
`;

export const TextWrapper = styled.div`
  width: 600px;
  height: 300px;
  padding: 50px;
  grid-area: textbox;
`;
export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: bold;
  color: #063183;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Description = styled.div<{ darkText?: boolean }>`
  margin-bottom: 35px;
  font-size: 1.5rem;
  line-height: 35px;
  color: #010606;
  letter-spacing: 0.5px;
  min-height: 100px;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  padding: 100px;
  display: flex;
  grid-area: imgbox;
`;
export const Img = styled.img`
  border-radius: 10px;
  border: 3px solid #bed0f4;
  max-width: 100%;
  height: auto;
  margin: 0 0 0 0;
  border-radius: 10px;
`;
