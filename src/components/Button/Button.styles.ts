import colors from '@/styles/colors';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';
import { variant } from 'styled-system';

const themeVariants = variant({
  prop: 'themes',
  variants: {
    default: {
      backgroundColor: '#FFFFFF',
      color: 'black',
    },
    sign: {
      backgroundColor: '#a0c3ff',
      color: 'white',
      '&:hover': {
        backgroundColor: '#eef4fe',
        color: '#808080',
      },
    },
    success: {
      border: 'none',
      backgroundColor: '#21D05F',
      color: '#FFFFFF',
    },
    danger: {
      border: 'none',
      backgroundColor: '#FF4D4E',
      color: '#FFFFFF',
    },
  },
});
export const Container = styled.button<Omit<ButtonProps, 'children'>>`
  ${themeVariants}
  font-size: 15px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  ${({ border }) =>
    border
      ? css`
          border: 1px solid #808080;
        `
      : css`
          border: none;
        `}
  ${({ radius }) =>
    radius === 'square'
      ? css`
          border-radius: 0.3rem;
        `
      : radius === 'circle'
      ? css`
          border-radius: 2rem;
        `
      : css`
          border-radius: 0;
        `}

        ${({ size }) =>
    size === 'xs'
      ? css`
          padding: 0.4rem 0.8rem;
        `
      : size === 'sm'
      ? css`
          padding: 0.5rem 1.5rem;
        `
      : size === 'md'
      ? css`
          padding: 0.7rem 2rem;
        `
      : css`
          padding: 1rem 2.5rem;
        `}
  
  background-color: ${({ color }) => color && colors[color]};
  color: ${({ textColor }) => textColor && colors[textColor]};
`;
