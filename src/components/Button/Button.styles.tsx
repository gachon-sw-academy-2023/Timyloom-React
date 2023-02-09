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
    remove: {
      backgroundColor: '#a0c3ff',
      color: 'white',
      '&:hover': {
        backgroundColor: '#e2e2ea',
        color: '#808080',
      },
    },
    success: {
      backgroundColor: '#21D05F',
      color: '#FFFFFF',
    },
    danger: {
      backgroundColor: '#DB4455',
      color: '#FFFFFF',
      '&:hover': {
        backgroundColor: '#eef4fe',
        color: '#808080',
      },
    },
    reset: {
      backgroundColor: '#eef4fe',
      padding: '0.2rem 0.4rem',
      '&:hover': {
        backgroundColor: '#a0c3ff',
      },
    },
  },
});
export const Container = styled.button<Omit<ButtonProps, 'children'>>`
  text-align: center;
  cursor: pointer;
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
          font-size: 0.8rem;
        `
      : size === 'sm'
      ? css`
          padding: 0.5rem 1.5rem;
          font-size: 1rem;
        `
      : size === 'md'
      ? css`
          padding: 0.7rem 2rem;
          font-size: 1.2rem;
        `
      : css`
          padding: 1rem 2.5rem;
          font-size: 1.2rem;
        `}
  ${themeVariants}
  
  background-color: ${({ color }) => color && colors[color]};
  color: ${({ textColor }) => textColor && colors[textColor]};
`;
