import * as S from '@/pages/NotFound/indexStyle';
import { useEffect } from 'react';

function NotFound() {
  return (
    <S.MainWrapper>
      <S.BodyWrapper>
        <S.ContentWrapper>
          <S.ImgWrapper />
          <S.TextWrapper>
            <S.H1Wrapper>
              <S.H1Text>404</S.H1Text>
            </S.H1Wrapper>
            <S.H2Text>we are sorry, but the page you requested was not found</S.H2Text>
            <S.ButtonWrapper to={`/`}>Go Home</S.ButtonWrapper>
          </S.TextWrapper>
        </S.ContentWrapper>
      </S.BodyWrapper>
    </S.MainWrapper>
  );
}

export default NotFound;
