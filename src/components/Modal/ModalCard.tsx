import { MouseEventHandler, useState, useEffect } from 'react';
import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import { FcViewDetails } from 'react-icons/fc';
import Button from '@/components/Button/Button';
import Tag from '@/components/Tag/Tag';

const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
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
    background-color: pink;
  }
`;

const ModalView = styled.div`
  display: flex;
  margin: 60px auto;
  flex-direction: column;
  background-color: white;
  width: 20vw;
  height: auto;
  min-width: 600px;
  border-radius: 5px;
`;

const ModaHeader = styled.div`
  height: 95px;
  padding: 20px 40px 8px 56px;
  position: relative;
  background-color: #eef4fe;
`;

const ModaHeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  height: 32px;
  min-height: 24px;
  resize: none;
  margin-bottom: 10px;
`;

const ModalContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 40px 8px 56px;
  display: block;
  height: 100%;
`;

const ModalMain1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LabelTitle = styled.span`
  font-size: 15px;
  font-weight: 700;
`;

const TitlelIcon = styled(FcViewDetails)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const ButtonDelete = styled(Button)`
  margin-left: 20px;
`;

const ButtonContainer = styled.div`
  min-height: 15px;
  padding: 20px 10px 20px 436px;
  position: relative;
`;
const OptionWrapper = styled.div`
  min-height: 60px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

interface ModalProps {
  showModal: boolean;
  setShowModal: Function;
  data: ModalDataProps;
}

interface ModalDataProps {
  cardTitle: string;
  cardId: string;
}

const ModalDefault: React.FunctionComponent<ModalProps> = ({ showModal, setShowModal, data }) => {
  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    {
      showModal ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    }
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <ModalBackdrop>
          <ModalView>
            <ModaHeader>
              <ModalCloseBtn onClick={handleModal}>
                <CgClose size="25" color="black" />
              </ModalCloseBtn>
              <ModaHeaderTitle>
                <TitlelIcon size="30" />
                {data.cardTitle}
              </ModaHeaderTitle>
              <ModalContent>Description</ModalContent>
            </ModaHeader>
            <ModalMain>
              <OptionWrapper>
                <LabelTitle>Label</LabelTitle>
                <ModalMain1>
                  <Tag></Tag>
                </ModalMain1>
              </OptionWrapper>
              <OptionWrapper>
                <LabelTitle>Date</LabelTitle>
                <ModalMain1>
                  <Button radius="square" border={false} size="xs" themes="sign">
                    Start
                  </Button>
                  <Button radius="square" border={false} size="xs" themes="sign">
                    End
                  </Button>
                </ModalMain1>
              </OptionWrapper>
              <OptionWrapper>
                <LabelTitle>Checklist</LabelTitle>
                <ModalMain1>
                  <Button radius="square" border={false} size="xs" themes="sign">
                    +
                  </Button>
                </ModalMain1>
              </OptionWrapper>
              <OptionWrapper>
                <LabelTitle>Map</LabelTitle>
                <ModalMain1>
                  <Button radius="square" border={false} size="xs" themes="sign">
                    +
                  </Button>
                </ModalMain1>
              </OptionWrapper>
            </ModalMain>

            <ButtonContainer>
              <Button radius="square" border={false} size="xs" themes="sign">
                Copy
              </Button>
              <Button radius="square" border={false} size="xs" themes="sign">
                SAVE
              </Button>
              <ButtonDelete radius="square" border={false} size="xs" themes="danger">
                DELETE
              </ButtonDelete>
            </ButtonContainer>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
};
export default ModalDefault;
