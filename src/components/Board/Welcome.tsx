import * as S from '@/components/Board/WelcomeStyle';
import { TypeAnimation } from 'react-type-animation';

interface WelcomeProps {
  ment: number;
}

function Welcome({ ment }: WelcomeProps) {
  const sequence = [
    [`😀 Welcome ${localStorage.getItem('id')}.`, 2000, '👆 Make your first List.', 2000],
    ['👆 Make your Card!', 2000, '👆 Make everything with Timmy Room.'],
  ];

  return (
    <S.WelcomeWrapper>
      <TypeAnimation sequence={sequence[ment]} wrapper="div" speed={75} repeat={Infinity} />
    </S.WelcomeWrapper>
  );
}
export default Welcome;
