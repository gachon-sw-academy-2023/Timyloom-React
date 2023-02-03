import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  && {
    cursor: pointer;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eef4fe;
  padding: 10px 15px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Textdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 256px;
  height: 25px;
  font-size: 1rem;
  font-weight: 600;
  color: #5d5d5d;
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
