import styled from 'styled-components';

export const AddListWrapper = styled.div`
  width: 272px;
  flex: 0 0 272px;
  border-right: 8px solid transparent;
  margin-left: 4px;
`;

export const AddListBtn = styled.button`
  width: 100%;
  height: 45px;
  font-size: 1rem;
  background-color: #eef4fe;
  border: none;
  border-radius: 5px;
  padding: 7px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    background-color: #e4ecfa;
  }
  transition: all 100ms ease-in;
`;

export const AddListInput = styled.input`
  width: 100%;
  height: 45px;
  font-size: 1rem;
  background-color: #ffffffd1;
  border-radius: 3px;
  padding: 4px 8px;
  border: none;
  &:focus {
    box-shadow: inset 0 0 0 2px #e4ecfa;
    outline: 0;
  }
`;
