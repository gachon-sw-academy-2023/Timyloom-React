import styled from 'styled-components';

export const AddCardWrapper = styled.div`
  width: 272px;
  flex: 0 0 272px;
  border-right: 8px solid transparent;
  margin-left: 4px;
`;

export const AddCardBtn = styled.button`
  font-size: 1rem;
  background-color: #e8ff15;
  border: none;
  border-radius: 5px;
  padding: 7px;
  &:hover {
    background-color: #ffffffd1;
  }
  transition: all 100ms ease-in;
`;

export const AddCardInput = styled.input`
  font-size: 1rem;
  background-color: #ffffffd1;
  border-radius: 3px;
  margin: -4px 0;
  padding: 4px 8px;
  border: none;
  &:focus {
    box-shadow: inset 0 0 0 2px #ee8d0d;
    outline: 0;
  }
`;