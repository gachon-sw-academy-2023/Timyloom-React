import { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
`;

const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalView = styled.div`
  text-align: center;
  text-decoration: none;
  padding: 30px 90px;
  background-color: white;
  width: 20vw;
  height: 60vh;
  border-radius: 30px;
  color: #4000c7;
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>{isOpen ? 'Opened !' : 'Open Modal'}</ModalBtn>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView>
              <div onClick={openModalHandler}>&times;</div>
              <div>Hello World</div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};
export default Modal;
