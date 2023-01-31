import * as S from './Button.styles';

export interface ButtonProps {
  size: 'xs' | 'sm' | 'md' | 'lg';
  children: string | JSX.Element;
  border: boolean;
  radius: 'circle' | 'square';
  color?: 'primaryColor_1' | 'primaryColor_2' | 'secondaryColor' | 'purple' | 'white' | 'gray_1' | 'gray_2' | 'gray_3';
  textColor?:
    | 'black_1'
    | 'black_2'
    | 'primaryColor_1'
    | 'primaryColor_2'
    | 'secondaryColor'
    | 'purple'
    | 'white'
    | 'gray_1'
    | 'gray_2'
    | 'gray_3';
  themes?: 'default' | 'sign' | 'success' | 'danger';
  onClick?: () => void;
}

export const Button = ({ size, color, border, textColor, radius, themes, children, ...props }: ButtonProps) => {
  return (
    <S.Container
      size={size}
      color={color}
      border={border}
      textColor={textColor}
      radius={radius}
      themes={themes}
      {...props}
    >
      {children}
    </S.Container>
  );
};

export default Button;
