import * as S from '@/components/Board/WelcomeStyle';
import { TypeAnimation } from 'react-type-animation';

function Welcome() {
  return (
    <S.WelcomeWrapper>
      <TypeAnimation
        sequence={['👆 Make your first list', 2000, '👆 Make everything with Timmy Room.', 1000]}
        wrapper="div"
        speed={75}
        repeat={Infinity}
      />
    </S.WelcomeWrapper>
  );
}
export default Welcome;
