import * as S from './OnboardingSectionStyle';
import { Slide } from 'react-awesome-reveal';
import section1Video from '@/assets/video/section1.mp4';

function Section1() {
  return (
    <S.InfoContainer>
      <S.InfoWrapper>
        <S.InfoRow imgStart>
          <Slide direction="left" triggerOnce>
            <S.ImgWrapper>
              <S.Video src={section1Video} autoPlay loop muted />
            </S.ImgWrapper>
          </Slide>
          <Slide direction="right" triggerOnce>
            <S.TextWrapper>
              <S.Title>Powerful Scheduler</S.Title>
              <S.Description>
                Simple and powerful. <br />
                Drag and drop cards and lists into the board
              </S.Description>
            </S.TextWrapper>
          </Slide>
        </S.InfoRow>
      </S.InfoWrapper>
    </S.InfoContainer>
  );
}

export default Section1;
