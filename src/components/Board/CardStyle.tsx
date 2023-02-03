import styled from 'styled-components';

export const CardDraggable = styled.div<{ isDragging?: string }>`
  background-color: ${(props) => (props.isDragging ? '#4FB740' : '#ffffff')};
  border-radius: 3px;
  margin-bottom: 8px;
  position: relative;
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
  padding-bottom: 2px;
`;

export const CardTitleWrapper = styled.div``;

export const DeleteWrapper = styled.div`
  margin-right: 5px;
  cursor: pointer;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  transition: all ease-in 300ms;
`;
