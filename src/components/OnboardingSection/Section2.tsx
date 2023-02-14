import * as S from './OnboardingSectionStyle';
import { TypeAnimation } from 'react-type-animation';
import test from '@/assets/images/test.png';
import { Zoom } from 'react-awesome-reveal';

const lightTheme = true;
const imgStart = true;

function Section2() {
  const sequence = [
    [
      `I'll make everything you want come true.`,
      2000,
      `You can freely choose the color you want.`,
      2000,
      'Do you want to go back to your previous work?',
      2000,
      'Press back as many times as you want.',
      3000,
    ],
  ];

  return (
    <S.InfoContainer lightTheme>
      <S.InfoWrapper>
        <S.InfoRow>
          <Zoom direction="left" triggerOnce>
            <S.TextWrapper>
              <S.Title>A Beautiful Scheduler</S.Title>
              <S.Description darkText>
                Flexibly, freely, beautifully <br />
                <TypeAnimation sequence={sequence[0]} wrapper="div" speed={75} repeat={Infinity} />
              </S.Description>
            </S.TextWrapper>
          </Zoom>
          <Zoom direction="right" triggerOnce>
            <S.ImgWrapper>
              <S.Img src={test} />
            </S.ImgWrapper>
          </Zoom>
        </S.InfoRow>
      </S.InfoWrapper>
    </S.InfoContainer>
  );
}

export default Section2;
