import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  && {
    cursor: pointer;
  }
`;

export const TextAreaWrapper = styled.div`
  background-color: #d4d4d4;
  padding: 10px 8px;
  padding-right: 36px;
  border-radius: 5px;
`;

export const Textdiv = styled.div`
  width: 256px;
  height: 25px;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  width: 256px;
  height: 21px;
  font-size: 1rem;
  resize: none;
  background-color: #ffffff;
  border: none;
  box-shadow: inset 0 0 0 2px #ee8d0d;
  outline: 0;
`;
