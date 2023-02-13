import styled from 'styled-components';

export const WelcomeWrapper = styled.div<{ brightness: number }>`
  margin: 10px 20px;
  font-size: 2rem;
  color: ${(props) => (props.brightness > 100 ? '#000000' : '#ffffff')};
`;
