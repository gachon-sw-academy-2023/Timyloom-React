import styled from 'styled-components';

export const ListWrapper = styled.div`
  &:first-child {
    margin-left: 8px;
  }
  width: 272px;
  display: inline-block;
  flex: 0 0 272px;
  margin: 0 6px;
`;

export const ListContent = styled.div`
  background-color: #d4d4d4;
  border-radius: 5px;
`;

export const ListDroppable = styled.div`
  min-height: 50px;
  margin: 4px;
  padding: 0px 4px 2px 4px;
`;

export const AddCardBtn = styled.button`
  font-size: 1rem;
  background-color: #e7ff6e;
  border: none;
  border-radius: 5px;
  padding: 7px;
  &:hover {
    background-color: #ffffffd1;
  }
  transition: all 100ms ease-in;
`;
