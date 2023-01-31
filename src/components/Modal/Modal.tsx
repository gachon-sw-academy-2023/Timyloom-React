import { MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import ModalDefault from './ModalDefalut';
import ModalBoard from './ModalBoard';

const ModalBackdrop = styled.div<{ backdropOn: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ backdropOn }) => (backdropOn ? 'flex' : 'none')};
`;

type ModalProps = {
  showModal: boolean;
  setShowModal: Function;
  data: ModalDataProps;
  themes: 'default' | 'board' | 'list' | 'card';
  backdropOn: boolean;
};

interface ModalDataProps {
  cardTitle: string | undefined;
  cardId: string | undefined;
  position: string | undefined;
}
const Modal: React.FunctionComponent<ModalProps> = ({
  showModal,
  setShowModal,
  data,
  themes = 'default',
  backdropOn = true,
}) => {
  return (
    <>
      {showModal ? (
        <ModalBackdrop backdropOn={backdropOn}>
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
