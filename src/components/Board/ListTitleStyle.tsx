import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  && {
    cursor: pointer;
  }
`;

export const TextAreaWrapper = styled.div`
  padding: 10px 8px;
  padding-right: 36px;

  & textarea {
    font-weight: 600;
  }
`;
