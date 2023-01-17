import styled from 'styled-components';

export const ListWrapper = styled.div`
  background-color: yellow;
  &:first-child {
    margin-left: 8px;
  }
  width: 272px;
  display: inline-block;
  flex: 0 0 272px;
  margin: 0 4px;
`;

export const ListContent = styled.div`
  background-color: greenyellow;
  border-radius: 3px;
`;

export const ListDroppable = styled.div`
  min-height: 50px;
  margin: 0 4px;
  padding: 0 4px;
`;
