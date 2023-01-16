import styled from 'styled-components';

export const ListWrapper = styled.div<{ listIsDragging: boolean }>`
  font-size: 30px;
  background-color: ${(props) => (props.listIsDragging ? '#1839bc' : '#d3ccff')};
  border-radius: 20px;
  width: 250px;
  height: 400px;
  margin: 10px;
  padding: 10px;
`;

export const CardWrapper = styled.div<{ cardIsDragging: boolean }>`
  background-color: ${(props) => (props.cardIsDragging ? '#796d47' : '#dcc573')};
  color: ${(props) => (props.cardIsDragging ? '#ffffff' : '#000000')};
  border-radius: 20px;
  padding: 5px;
  text-align: center;
  font-size: 15px;
  height: 40px;
  margin: 5px;
`;
