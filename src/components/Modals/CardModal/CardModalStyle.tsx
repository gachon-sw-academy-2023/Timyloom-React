import styled from 'styled-components';
import { FcViewDetails } from 'react-icons/fc';
import Button from '@/components/Button/Button';

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const ModalView = styled.div`
  display: flex;
  margin: 100px auto;
  flex-direction: column;
  background-color: white;
  width: 35vw;
  max-width: 500px;
  min-width: 400px;
  height: auto;
  min-height: 100px;
  border-radius: 10px;

  @media (max-width: 425px) {
    width: 250px;
    min-width: 300px;
  }
`;

export const ModalCloseBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 999px;
  transition: all 200ms ease-in-out;
  overflow: hidden;
  position: absolute;
  padding: 11px;
  top: 8px;
  right: 8px;
  background-color: transparent;
  &:hover {
    background-color: #a0c3ff;
  }
`;

export const TitlelIcon = styled(FcViewDetails)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 110px;
  padding: 20px 40px 8px 56px;
  position: relative;
  background-color: #eef4fe;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const ModalTitle = styled.textarea<{ cardTitle: string }>`
  cursor: pointer;
  width: ${(props) => `${props.cardTitle.length * 23}px`};
  min-width: 200px;
  font-size: 1.3rem;
  height: 40px;
  margin: 10px 0px 0px 0px;
  padding: 4px 8px;
  border: none;
  resize: none;
  border-radius: 3px;
  background: transparent;
  &:focus {
    cursor: text;
    background: white;
    box-shadow: inset 0 0 0 2px #5d5d5d;
    outline: 0;
  }
`;

export const ModalDescription = styled.textarea<{ cardDescription: string }>`
  cursor: pointer;
  width: ${(props) => `${props.cardDescription.length * 10}px`};
  min-width: 200px;
  font-size: 0.9rem;
  height: 30px;
  margin: 0px 0px 0px 3px;
  padding: 4px 8px;
  border: none;
  resize: none;
  border-radius: 3px;
  background: transparent;
  &:focus {
    cursor: text;
    background: white;
    box-shadow: inset 0 0 0 2px #5d5d5d;
    outline: 0;
  }
`;

export const ModalOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px 8px 56px;
  display: block;
  height: auto;
  min-height: 200px;
`;

export const OptionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 10px;
`;

export const OptionTitle = styled.div`
  margin: 0 10px;
  font-size: 15px;
  font-weight: 700;
`;

export const OptionContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  margin: 10px 20px;
`;
export const OptionWrapper = styled.div`
  min-height: 60px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const DateCustomInput = styled.input`
  text-align: center;
  padding: 0.6rem 1.5rem 0.6rem;
  font-size: 1rem;
  margin: 10px 20px;
  width: auto;
  border-color: #a0c3ff;
  border: 2px solid #eef4fe;
  border-radius: 10px;
  color: #000000;
  outline: none;

  ::placeholder {
    color: gray;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 30px;
`;
export const FooTerButtonContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-evenly;
`;
