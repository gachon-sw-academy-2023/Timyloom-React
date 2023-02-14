import * as S from './OnboardingSectionStyle';
import { TypeAnimation } from 'react-type-animation';
import { Zoom } from 'react-awesome-reveal';
import section2Video from '@/assets/video/section2.mp4';
function Section2() {
  const sequence = [
    [`I'll make everything you want come true.`, 2000, `You can freely choose the color you want.`, 2000],
  ];

  return (
    <S.InfoContainer lightTheme>
      <S.InfoWrapper>
        <S.InfoRow>
          <Zoom direction="left" triggerOnce>
            <S.TextWrapper>
              <S.Title>Beautiful Scheduler</S.Title>
              <S.Description>
                Flexibly, freely, beautifully <br />
                <TypeAnimation sequence={sequence[0]} wrapper="div" speed={75} repeat={Infinity} />
              </S.Description>
            </S.TextWrapper>
          </Zoom>
          <Zoom direction="right" triggerOnce>
            <S.ImgWrapper>
              <S.Video src={section2Video} autoPlay loop muted />
            </S.ImgWrapper>
          </Zoom>
        </S.InfoRow>
      </S.InfoWrapper>
    </S.InfoContainer>
  );
}

export default Section2;
