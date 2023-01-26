import { MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import ModalDefault from './ModalDefalut';
import ModalBoard from './ModalBoard';

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalView = styled.div`
  background-color: white;
  width: 20vw;
  height: 60vh;
  min-height: 400px;
  min-width: 600px;
  border-radius: 30px;
`;

const ModaHeader = styled.div`
  min-height: 32px;
  padding: 12px 40px 8px 56px;
  position: relative;
  box-sizing: border-box;
`;

const ModaHeaderTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  height: 32px;
  min-height: 24px;
  resize: none;
`;

const ModalContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
`;

const ModalMain = styled.div`
  float: left;
  margin: 0;
  min-height: 24px;
  padding: 0 8px 8px 16px;
  position: relative;
  width: 400px;
  box-sizing: border-box;
`;

type ModalProps = {
  showModal: boolean;
  setShowModal: Function;
  data?: any;
  themes?: 'default' | 'board' | 'list' | 'card';
};
const Modal: React.FunctionComponent<ModalProps> = ({ showModal, setShowModal, data, themes = 'default' }) => {
  return (
    <>
      {showModal ? (
        <ModalBackdrop
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          {themes === 'default' ? (
            <ModalDefault showModal={showModal} setShowModal={setShowModal} data={data} />
          ) : themes === 'board' ? (
            <ModalBoard showModal={showModal} setShowModal={setShowModal} data={data} />
          ) : (
            <p>반갑</p>
          )}
        </ModalBackdrop>
      ) : null}
    </>
  );
};
export default Modal;
