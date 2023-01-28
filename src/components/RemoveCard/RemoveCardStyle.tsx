import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 30px;
  margin: 0px 30px 150px 30px;
  text-align: center;
  background-color: #d8c7bb;
  width: 600px;
  height: 236px;
  border-radius: 30px;
`;

export const CardTitle = styled.div<{ size: string }>`
  font-size: ${(props) => props.size};
  margin: 10px;
`;
