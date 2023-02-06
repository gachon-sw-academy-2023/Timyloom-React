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
  justify-content: space-between;
  width: 272px;
  background-color: #eef4fe;
  min-height: 25px;
  height: auto;
  padding: 10px 15px;
  word-break: normal;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Textdiv = styled.div`
  display: block;
  align-items: center;
  justify-content: flex-start;
  width: 256px;
  white-space: normal;
  font-size: 1.1rem;
  font-weight: 600;
  color: #5d5d5d;
`;

export const Textarea = styled.textarea`
  display: block;
  width: 256px;
  white-space: normal;
  font-size: 1.1rem;
  font-weight: 600;
  color: #5d5d5d;
  background-color: #eef4fe;
  border: none;
  outline: 0;
  &:focus {
    min-height: 50px;
    height: auto;
    transition: all 300ms ease-out;
  }
`;

export const DeleteWrapper = styled.div`
  cursor: pointer;
  opacity: 0;

  &:hover {
    opacity: 1;
  }
  transition: all 300ms ease-out;
`;
