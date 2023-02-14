import * as S from './OnboardingSectionStyle';
import { TypeAnimation } from 'react-type-animation';
import { Slide } from 'react-awesome-reveal';
import test from '@/assets/images/test.png';

const lightTheme = true;
const imgStart = true;

function Section1() {
  const sequence = [['😀Drag and drop cards and lists into the board', 2000, `😀원하는 기능 문구 넣어주세요`, 2000]];
  return (
    <S.InfoContainer>
      <S.InfoWrapper>
        <S.InfoRow imgStart>
          <Slide direction="left" triggerOnce>
            <S.ImgWrapper>
              <S.Img src={test} />
            </S.ImgWrapper>
          </Slide>
          <Slide direction="right" triggerOnce>
            <S.TextWrapper>
              <S.Title>A Powerful Scheduler</S.Title>
              <S.Description darkText>
                Simple and powerful. <br />
                <TypeAnimation sequence={sequence[0]} wrapper="div" speed={75} repeat={Infinity} />
              </S.Description>
            </S.TextWrapper>
          </Slide>
        </S.InfoRow>
      </S.InfoWrapper>
    </S.InfoContainer>
  );
}

export default Section1;
