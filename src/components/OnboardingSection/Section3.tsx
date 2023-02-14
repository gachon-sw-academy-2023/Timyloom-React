import * as S from './OnboardingSectionStyle';
import { TypeAnimation } from 'react-type-animation';
import test from '@/assets/images/test.png';
import { Slide, JackInTheBox } from 'react-awesome-reveal';

const lightTheme = true;
const imgStart = true;

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
              <S.Img src={test} />
            </S.ImgWrapper>
          </JackInTheBox>

          <JackInTheBox triggerOnce>
            <S.TextWrapper>
              <S.Title>Various Views</S.Title>
              <S.Description darkText>
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
