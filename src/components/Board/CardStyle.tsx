import styled from 'styled-components';

export const CardDraggable = styled.div<{ isDragging?: string }>`
  background-color: ${(props) => (props.isDragging ? '#4FB740' : '#193DF4')};
  rotate: ${(props) => (props.isDragging ? '40deg' : '0')};
  border-radius: 3px;
  margin-bottom: 8px;
  position: relative;
`;

export const TextAreaWrapper = styled.div`
  padding-top: 6px;
  padding-bottom: 2px;
`;
