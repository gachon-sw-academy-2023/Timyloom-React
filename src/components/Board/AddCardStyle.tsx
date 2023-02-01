import styled from 'styled-components';

export const AddCardWrapper = styled.div`
  width: 272px;
  flex: 0 0 272px;
  border-right: 8px solid transparent;
`;

export const AddCardBtn = styled.button`
  width: 256px;
  font-size: 1rem;
  background-color: #ffffff68;
  border: none;
  border-radius: 5px;
  padding: 3px 0;
  margin-top: 35px;
  margin-bottom: 10px;
  &:hover {
    background-color: #ffffff;
  }
  transition: all 100ms ease-in;
`;

export const AddCardInput = styled.input`
  width: 256px;
  height: 28px;
  margin-bottom: 10px;
  font-size: 1rem;
  background-color: #ffffffd1;
  border-radius: 3px;
  border: none;
  margin-top: 35px;
  &:focus {
    box-shadow: inset 0 0 0 2px #5d5d5d;
    outline: 0;
  }
`;
