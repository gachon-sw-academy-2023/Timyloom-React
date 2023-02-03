import styled from 'styled-components';

export const AddCardWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

export const AddCardBtn = styled.button`
  width: 100%;
  font-size: 1rem;
  background-color: #eef4fe;
  /* box-shadow: #091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px; */
  border: none;
  border-radius: 5px;
  padding: 3px;
  &:hover {
    box-shadow: #091e4240 0px 4px 8px -2px, #091e4214 0px 0px 0px 1px;
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
    box-shadow: inset 0 0 0 2px #bed0f4;
    outline: 0;
  }
`;
