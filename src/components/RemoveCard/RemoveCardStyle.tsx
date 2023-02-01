import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 30px;
  margin: 0px 30px 150px 30px;
  text-align: center;
  background-color: ${(props) => props.theme.primaryColor_1};
  width: 1200px;
  height: 600px;
  border-radius: 15px;
`;

export const CardTitle = styled.div<{ size: string }>`
  font-size: ${(props) => props.size};
  margin: 10px;
`;
