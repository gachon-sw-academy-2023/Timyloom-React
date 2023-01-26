import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
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

const ModalCloseBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  width: auto;
  height: auto;
  cursor: pointer;
  border: 1px solid;
  border-radius: 999px;
  transition: all 200ms ease-in-out;
  overflow: hidden;
  position: absolute;
  padding: 11px;
  top: 8px;
  right: 8px;
  z-index: 1;
  border-color: transparent;
  background-color: transparent;
  &:hover {
    background-color: #d9d9d9;
  }
`;

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

const ModalLabel = styled.div`
  float: right;
  overflow: hidden;
  padding: 0 16px 8px 8px;
  width: calc(100% - 400px);
  box-sizing: border-box;
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalBtn onClick={openModalHandler}>{isOpen ? 'Opened !' : 'Open Modal'}</ModalBtn>
      {isOpen ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView>
            <ModaHeader>
              <ModalCloseBtn onClick={openModalHandler}>
                <CgClose size="25" color="black" />
              </ModalCloseBtn>
              <ModaHeaderTitle>Hello World</ModaHeaderTitle>
              <ModalContent>in list Teams</ModalContent>
            </ModaHeader>
            <ModalMain>
              Description<br></br>dddddd
            </ModalMain>
            <ModalLabel>Add to card</ModalLabel>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
};
export default Modal;
