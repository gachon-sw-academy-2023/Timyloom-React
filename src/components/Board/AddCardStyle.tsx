import styled from 'styled-components';

export const AddCardWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const AddCardBtn = styled.button`
  width: 100%;
  font-size: 1rem;
  background-color: #ffffff60;
  border: none;
  border-radius: 5px;
  padding: 3px;
  &:hover {
    box-shadow: #00000040 0px 4px 8px -2px, #00000013 0px 0px 0px 1px;
  }
  transition: all 100ms ease-in;
`;

export const AddCardInput = styled.input`
  width: 100%;
  height: 28px;
  margin-bottom: 10px;
  font-size: 1rem;
  background-color: #ffffffd1;
  border-radius: 3px;
  border: none;
  &:focus {
    box-shadow: inset 0 0 0 2px #00000045;
    outline: 0;
  }
`;
