import styled from 'styled-components';

export const AddListWrapper = styled.div`
  width: 272px;
  flex: 0 0 272px;
  /* instead of margin right for overflow-x scroll */
  border-right: 8px solid transparent;
  margin-left: 4px;
`;

export const AddListBtn = styled.button`
  font-size: 1rem;
  background-color: #ffbdbd;
`;

export const AddListInput = styled.input`
  font-size: 1rem;
  background-color: #ffffffd1;
  border-radius: 3px;
  margin: -4px 0;
  padding: 4px 8px;
  border: none;
  &:focus {
    box-shadow: inset 0 0 0 2px #0079bf;
    outline: 0;
  }
`;
