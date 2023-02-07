import * as S from '@/components/Board/WelcomeStyle';
import { TypeAnimation } from 'react-type-animation';

interface WelcomeProps {
  welcomeMessageIndex: number;
  brightness: number;
}

function Welcome({ welcomeMessageIndex, brightness }: WelcomeProps) {
  const sequence = [
    [`😀 Welcome ${localStorage.getItem('id')}.`, 2000, '👆 Make your first List.', 2000],
    ['👆 Make your Card!', 2000, '👆 Make everything with Timmyloom.', 2000],
  ];

  return (
    <S.WelcomeWrapper brightness={brightness}>
      <TypeAnimation sequence={sequence[welcomeMessageIndex]} wrapper="div" speed={75} repeat={Infinity} />
    </S.WelcomeWrapper>
  );
}
export default Welcome;
