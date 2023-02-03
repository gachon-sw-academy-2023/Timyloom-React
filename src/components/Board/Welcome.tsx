import * as S from '@/components/Board/WelcomeStyle';
import { TypeAnimation } from 'react-type-animation';

function Welcome() {
  return (
    <S.WelcomeWrapper>
      <TypeAnimation
        sequence={['Type faster or slower by setting speed.', 1000, '']}
        speed={75}
        wrapper="h2"
        repeat={Infinity}
      />
    </S.WelcomeWrapper>
  );
}
export default Welcome;
