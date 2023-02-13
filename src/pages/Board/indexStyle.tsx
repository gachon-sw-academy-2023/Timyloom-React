import styled from 'styled-components';

export const BoardContainer = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  display: inline-flex;
  flex-direction: column;
  padding: 10px 0px 10px 25px;
  background-color: ${(props) => `${props.backgroundColor}`};

  @media screen and (max-width: 425px) {
    padding: 10px 0px 10px 5px;
  }
`;

export const BoardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const BoardTitleContainer = styled.textarea<{ brightness: number }>`
  color: ${(props) => `${props.brightness > 100 ? '#000000' : '#ffffff'}`};
  margin: 10px 0px 5px 0px;
  padding: 4px 8px;
  cursor: pointer;
  width: calc(100% - 400px);
  min-width: 150px;
  min-height: 40px;
  font-size: 1.3rem;
  border: none;
  resize: none;
  border-radius: 3px;
  background: transparent;
  &:focus {
    cursor: text;
    background: white;
    box-shadow: inset 0 0 0 2px #5d5d5d;
    outline: 0;
    color: #000000;
  }
`;

export const DeleteBtn = styled.button`
  border: 0;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background-color: #feabab;
  }

  transition: all ease-in 100ms;
`;
export const SettingBtn = styled.button`
  border: 0;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background-color: #d0d0d0;
  }

  transition: all ease-in 300ms;
`;

export const GoBackBtn = styled.button<{ isGoBackAvavailable: boolean }>`
  border: 0;
  border-radius: 10px;
  padding: 5px;
  opacity: ${(props) => (props.isGoBackAvavailable ? '1' : '0.3')};
  &:hover {
    background-color: #eef4fe;
  }

  transition: all ease-in 100ms;

  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;

export const PopOver = styled.div`
  position: absolute;
  z-index: 2;
  top: 150px;
  right: 10px;

  @media screen and (max-width: 510px) {
    top: 200px;
    right: 10px;
  }

  @media screen and (max-width: 320px) {
    top: 300px;
    right: 10px;
  }
`;

export const BoardUtilContainer = styled.div`
  justify-content: flex-end;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  width: 300px;
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;
