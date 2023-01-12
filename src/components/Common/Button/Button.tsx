import * as S from './Button.styles';
// import { ButtonProps } from './Button.types';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';

const themes = ['primary', 'secondary', 'white'];
addDecorator(withThemesProvider(themes));

export interface ButtonProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: string;
  color?: 'primaryColor_1' | 'primaryColor_2' | 'white';
  border?: boolean;
  textColor?: 'white' | 'black_1' | 'gray_1';
  radius?: 'circle' | 'square';
  themes?: { themes };
  onClick?: () => void;
}

export const Button = ({
  size = 'md',
  color = 'primaryColor_2',
  border = false,
  textColor = 'gray_1',
  radius = 'circle',
  theme = 'primary',
  children,
  ...props
}: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <S.Container
        size={size}
        color={color}
        border={border}
        textColor={textColor}
        radius={radius}
        theme={theme}
        {...props}
      >
        {children}
      </S.Container>
    </ThemeProvider>
  );
};

export default Button;
