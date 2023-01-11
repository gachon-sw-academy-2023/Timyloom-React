import styled from 'styled-components';

export const WorkspaceContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 93vh;
  min-width: 250px;
  background-color: ${(props) => props.theme.colors.primaryColor_1};
  padding: 30px;
`;

export const BoardWrapper = styled.div`
  font-size: 30px;
  background-color: #65ff86;
  width: 200px;
  height: 200px;
  margin: 10px;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
