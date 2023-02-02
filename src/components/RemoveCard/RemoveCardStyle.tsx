import styled from 'styled-components';
import { ReactComponent as Gear } from '@/assets/images/gear.svg';

export const CardWrapper = styled.div`
  padding: 30px;
  margin: 0px 30px 150px 30px;
  text-align: center;
  background-color: ${(props) => props.theme.primaryColor_1};
  width: 1200px;
  height: 600px;
  border-radius: 15px;
`;

export const GearSvg = styled(Gear)`
  width: 100px;
  height: 100px;
  margin-top: 15vh;
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
  font-size: ${(props) => props.size};
  margin: 10px;
`;
