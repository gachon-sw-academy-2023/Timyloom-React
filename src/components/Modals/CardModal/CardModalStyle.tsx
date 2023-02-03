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
  min-width: 500px;
  height: auto;
  min-height: 100px;
  overflow: hidden;
  border-radius: 10px;
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
  height: 110px;
  padding: 20px 40px 8px 56px;
  position: relative;
  background-color: #eef4fe;
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  height: 32px;
  margin-bottom: 20px;
`;

export const ModalDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
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
  margin-bottom: 20px;
`;

export const OptionTitle = styled.div`
  margin-left: 8px;
  font-size: 15px;
  font-weight: 700;
`;

export const OptionContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
`;
export const ButtonDelete = styled(Button)`
  margin-left: 20px;
`;
export const OptionWrapper = styled.div`
  min-height: 60px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const ModalFooter = styled.div`
  height: 80px;
  padding: 40px 10px 40px 420px;
  position: relative;
`;
