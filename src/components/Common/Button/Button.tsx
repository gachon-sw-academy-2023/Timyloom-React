import * as S from './Button.styles';
// import { ButtonProps } from './Button.types';

export interface ButtonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: string;
  color?: 'primaryColor_1' | 'primaryColor_2' | 'white';
  border?: boolean;
  textColor?: 'white' | 'black_1';
  radius?: 'circle' | 'square';
  onClick?: () => void;
}

export const Button = ({
  size = 'md',
  color = 'primaryColor_1',
  border = false,
  textColor = 'white',
  radius = 'circle',
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Container size={size} color={color} border={border} textColor={textColor} radius={radius} {...props}>
      {children}
    </S.Container>
  );
};

export default Button;
