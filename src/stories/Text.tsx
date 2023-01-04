import styled, { css } from 'styled-components';

// Text에서 사용될 props 정의
export const TextProps = {
  size: ['small', 'medium'] as const,
  color: ['primary', 'error'] as const,
};

// Text에서 사용될 props interface 정의
export interface Iprops {
  size: typeof TextProps.size[number]; // 'small' | 'medium'
  color: typeof TextProps.color[number]; // 'primary' | 'error'
  weight: number | string;
}

const Text = styled.span<Iprops>`
  letter-spacing: -0.56px;

  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          font-size: 14px;
        `;

      case 'medium':
        return css`
          font-size: 18px;
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case 'primary':
        return css`
          color: #1ea7fd;
        `;

      case 'error':
        return css`
          color: #ce1e15;
        `;
    }
  }}

    ${(props) => css`
    font-weight: ${props.weight};
  `}
`;

export default Text;
