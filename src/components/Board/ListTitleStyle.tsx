import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  && {
    cursor: pointer;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  background-color: #d4d4d4;
  padding: 10px 8px;
  border-radius: 5px;
`;

export const Textdiv = styled.div`
  width: 256px;
  height: 25px;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  width: 256px;
  height: 25px;
  font-size: 1rem;
  resize: none;
  background-color: #ffffff;
  border: none;
  box-shadow: inset 0 0 0 2px #5d5d5d;
  outline: 0;
`;

export const DeleteWrapper = styled.div`
  cursor: pointer;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
  transition: all 300ms ease-out;
`;
