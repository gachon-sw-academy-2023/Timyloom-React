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
  background-color: red;
  width: 256px;
  height: 21px;
  font-size: 1rem;
  resize: none;
  background-color: #ffffff;
  border: none;
  box-shadow: inset 0 0 0 2px #ee8d0d;
  outline: 0;
`;

export const Delete = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 0 5px;
  color: #d4d4d4;
  &:hover {
    color: black;
    transform: rotate(180deg);
  }
  transition: all 300ms ease-out;
`;
