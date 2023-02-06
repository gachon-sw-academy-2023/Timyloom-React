import styled from 'styled-components';
import { ReactComponent as Gear } from '@/assets/images/gear.svg';

export const Container = styled.div`
  background-color: ${(props) => props.theme.primaryColor_1};
  width: 100vw;
  height: 92.5%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  padding: 30px;
  margin: 0px 30px 70px 30px;
  text-align: center;
  background-color: ${(props) => props.theme.primaryColor_1};
  width: 1200px;
  height: 600px;
  border-radius: 20px;
  box-shadow: 6px 6px 16px #cacfd8, -6px -6px 16px #ffffff;
`;

export const GearSvg = styled(Gear)`
  width: 100px;
  height: 100px;
  margin-top: 12vh;
  animation: rotation 2000ms infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const CardTitle = styled.div<{ size: string }>`
  width: 100%;
  font-family: 'SCDreamMedium', 'Roboto', sans-serif;
  font-size: ${(props) => props.size};
  margin: 10px;
`;
