import styled from 'styled-components';

export const BoardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`;

export const BoardTitle = styled.textarea<{ boardTitle: any }>`
  cursor: pointer;
  width: ${(props) => `${props.boardTitle.length * 23}px`};
  min-width: 200px;
  font-size: 1.3rem;
  height: 40px;
  margin: 10px 0px 0px 0px;
  padding: 4px 8px;
  border: none;
  resize: none;
  border-radius: 3px;
  background: transparent;
  &:focus {
    cursor: text;
    background: white;
    box-shadow: inset 0 0 0 2px #ee8d0d;
    outline: 0;
  }
`;

export const DeleteBtn = styled.button`
  border: 0;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #ffcdcd;
  }
`;
