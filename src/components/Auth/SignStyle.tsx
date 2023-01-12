import styled from 'styled-components';
import background from '@/assets/images/signMain.png';
import { ReactComponent as Eye } from '@/assets/images/eye.svg';

export const SignWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 93%;
  background: ${(props) => props.theme.colors.primaryColor_2};
`;

export const SignCard = styled.div`
  display: flex;
  width: 50vw;
  height: 70vh;
  border-radius: 20px;
  margin: auto;

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export const SignPanel = styled.div<{ signStart: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 0.5;
  background: ${(props) => props.theme.colors.white};
  padding: 1rem 5rem;
  border-radius: 20px;
  border-top-left-radius: ${(props) => (props.signStart ? 'none' : '0')};
  border-bottom-left-radius: ${(props) => (props.signStart ? 'none' : '0')};

  border-top-right-radius: ${(props) => (props.signStart ? '0' : 'none')};
  border-bottom-right-radius: ${(props) => (props.signStart ? '0' : 'none')};

  @media (max-width: 1000px) {
    border-radius: 20px;
  }
`;

export const FormTitle = styled.div`
  font-size: 1.9rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

export const InputWrap = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid ${(props) => props.theme.colors.gray_2};
  margin-bottom: 3vh;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 4vh;
  background: 0 0;
  padding: 0 5px;
  outline: none;
  border: none;

  &:focus {
    ::placeholder {
      color: #808080;
      font-size: 10px;
    }
  }

  ::placeholder {
    color: transparent;
    font-size: 12px;
  }
`;

export const SignBtn = styled.button`
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 5vh;
  border-radius: 25px;
  margin-top: 2vh;
  background-color: ${(props) => props.theme.colors.primaryColor_2};
  color: ${(props) => props.theme.colors.gray_1};
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryColor};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const SignLink = styled.a`
  margin: 0.8rem;
  color: ${(props) => props.theme.colors.gray_1};
  text-align: center;

  &:hover {
    color: ${(props) => props.theme.colors.secondaryColor};
  }
`;

export const EyeSvg = styled((props) => <Eye {...props} />)<{ $isShow: boolean }>`
  color: ${(props) => (props.$isShow ? props.theme.colors.pupple : props.theme.colors.gray_2)};
  font-size: 15px;
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  padding-right: 5px;
  cursor: pointer;

  transition: all 0.4s;
  &:hover {
    color: ${(props) => props.theme.colors.pupple};
  }
`;

export const InputTitle = styled.div<{ value: string; isReg: boolean }>`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;

  ::before {
    content: '';
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${(props) => (props.value ? '100%' : '0')};
    height: 2px;
    transition: all 0.4s;
    background: -webkit-linear-gradient(left, #ccc1be, #844685);
  }

  ::after {
    font-size: 15px;
    color: ${(props) => (props.isReg ? props.theme.colors.gray_2 : props.theme.colors.secondaryColor)};
    line-height: 1.2;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: ${(props) => (props.value ? '-15px' : '10px')};
    left: 0px;
    padding-left: 5px;
    transition: all 0.4s;

    @media (max-height: 700px) {
      top: ${(props) => (props.value ? '-15px' : '0px')};
    }
  }
  ${FormInput}:focus ~ & {
    ::before {
      width: 100%;
    }
    ::after {
      top: -15px;
    }
  }
`;
export const ImgPanel = styled.div<{ imgStart: boolean }>`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  flex-grow: 4;
  border-radius: 20px;

  border-top-left-radius: ${(props) => (props.imgStart ? 'none' : '0')};
  border-bottom-left-radius: ${(props) => (props.imgStart ? 'none' : '0')};

  border-top-right-radius: ${(props) => (props.imgStart ? '0' : 'none')};
  border-bottom-right-radius: ${(props) => (props.imgStart ? '0' : 'none')};

  @media (max-width: 1000px) {
    display: none;
  }
`;
