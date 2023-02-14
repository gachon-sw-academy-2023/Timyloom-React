import * as S from './OnboardingSectionStyle';
import { TypeAnimation } from 'react-type-animation';
import { JackInTheBox } from 'react-awesome-reveal';
import section3Video from '@/assets/video/section3.mp4';
function Section3() {
  const sequence = [
    [
      `I'll show you the best way that suits you.`,
      2000,
      `Cards at a glance through Table view and Calendar view`,
      2000,
    ],
  ];

  return (
    <S.InfoContainer>
      <S.InfoWrapper>
        <S.InfoRow imgStart>
          <JackInTheBox triggerOnce>
            <S.ImgWrapper>
              <S.Video src={section3Video} autoPlay loop muted />
            </S.ImgWrapper>
          </JackInTheBox>

          <JackInTheBox triggerOnce>
            <S.TextWrapper>
              <S.Title>Various Views</S.Title>
              <S.Description>
                Intuitive and freely
                <br />
                <TypeAnimation sequence={sequence[0]} wrapper="div" speed={75} repeat={Infinity} />
              </S.Description>
            </S.TextWrapper>
          </JackInTheBox>
        </S.InfoRow>
      </S.InfoWrapper>
    </S.InfoContainer>
  );
}

export default Section3;
