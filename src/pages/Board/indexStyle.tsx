import styled from 'styled-components';

export const BoardWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 10px 25px;
  background-color: #ffffff;
`;

export const BoardTitle = styled.textarea<{ boardTitle: string }>`
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
    box-shadow: inset 0 0 0 2px #5d5d5d;
    outline: 0;
  }
`;

export const DeleteBtn = styled.button`
  border: 0;
  position: absolute;
  right: 70px;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background-color: #ffdfdf;
  }

  transition: all ease-in 100ms;
`;
export const SettingBtn = styled.button`
  border: 0;
  position: absolute;
  right: 20px;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background-color: #eef4fe;
  }

  transition: all ease-in 100ms;
`;

export const UtilContainer = styled.div`
  background-color: yellow;
  position: absolute;
  right: 0;
  top: 50;
`;

export const LogBtn = styled.button`
  border: 0;
  position: absolute;
  right: 120px;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background-color: #eef4fe;
  }

  transition: all ease-in 100ms;
`;

export const GoBackBtn = styled.button<{ isGoBackAvavailable: boolean }>`
  border: 0;
  position: absolute;
  right: 230px;
  padding: 5px;
  border-radius: 10px;
  opacity: ${(props) => (props.isGoBackAvavailable ? '1' : '0.3')};
  &:hover {
    background-color: #eef4fe;
  }

  transition: all ease-in 100ms;
`;
