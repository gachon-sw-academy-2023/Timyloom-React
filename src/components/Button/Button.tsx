import * as S from './Button.styles';
// import { ButtonProps } from './Button.types';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

export interface ButtonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: string;
  color?: 'primaryColor_1' | 'primaryColor_2' | 'secondaryColor' | 'purple' | 'white' | 'gray_1' | 'gray_2' | 'gray_3';
  border?: boolean;
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
  radius?: 'circle' | 'square';
  themes?: 'default' | 'sign' | 'success' | 'danger';
  onClick?: () => void;
}

export const Button = ({
  size = 'md',
  color = 'primaryColor_2',
  border = false,
  textColor = 'gray_1',
  radius = 'circle',
  themes,
  children,
  ...props
}: ButtonProps) => {
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
