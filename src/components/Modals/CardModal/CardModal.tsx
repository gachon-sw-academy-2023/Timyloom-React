import { MouseEventHandler, useState, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import * as S from '@/components/Modals/CardModal/CardModalStyle';
import Button from '@/components/Button/Button';
import Tag from '@/components/Tag/Tag';
import { FaBookmark } from 'react-icons/fa';
import { FcClock } from 'react-icons/fc';
import { FcTodoList } from 'react-icons/fc';
import { FaMap } from 'react-icons/fa';

interface ModalProps {
  showModal: boolean;
  setShowModal: Function;
  data: ModalDataProps;
}

interface ModalDataProps {
  cardTitle: string;
  cardId: string;
}
function CardModal({ showModal, setShowModal, data }: ModalProps) {
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
        <S.ModalBackdrop>
          <S.ModalView>
            <S.ModalHeader>
              <S.ModalCloseBtn onClick={handleModal}>
                <CgClose size="25" color="black" />
              </S.ModalCloseBtn>
              <S.ModalTitle>
                <S.TitlelIcon size="30" />
                {data.cardTitle}
              </S.ModalTitle>
              <S.ModalDescription>Description을 적으세요!!</S.ModalDescription>
            </S.ModalHeader>
            <S.ModalOptionContainer>
              <S.OptionWrapper>
                <S.OptionTitleWrapper>
                  <FaBookmark color="#a0c3ff" size="25" />
                  <S.OptionTitle>Labels</S.OptionTitle>
                </S.OptionTitleWrapper>
                <S.OptionContentWrapper>
                  <Tag />
                </S.OptionContentWrapper>
              </S.OptionWrapper>
              <S.OptionWrapper>
                <S.OptionTitleWrapper>
                  <FcClock size="30" />
                  <S.OptionTitle>Date</S.OptionTitle>
                </S.OptionTitleWrapper>
                <S.OptionContentWrapper>
                  <Button radius="square" border={false} size="xs" themes="sign">
                    Start
                  </Button>
                  <Button radius="square" border={false} size="xs" themes="sign">
                    End
                  </Button>
                </S.OptionContentWrapper>
              </S.OptionWrapper>
              <S.OptionWrapper>
                <S.OptionTitleWrapper>
                  <FcTodoList size="25" />
                  <S.OptionTitle>Checklist</S.OptionTitle>
                </S.OptionTitleWrapper>
                <S.OptionContentWrapper>
                  <Button radius="square" border={false} size="xs" themes="sign">
                    +
                  </Button>
                </S.OptionContentWrapper>
              </S.OptionWrapper>
              <S.OptionWrapper>
                <S.OptionTitleWrapper>
                  <FaMap color="#BED0F4" size="25" />
                  <S.OptionTitle>Map</S.OptionTitle>
                </S.OptionTitleWrapper>
                <S.OptionContentWrapper>
                  <Button radius="square" border={false} size="xs" themes="sign">
                    +
                  </Button>
                </S.OptionContentWrapper>
              </S.OptionWrapper>
            </S.ModalOptionContainer>

            <S.ModalFooter>
              <Button radius="square" border={false} size="xs" themes="sign">
                SAVE
              </Button>
              <S.ButtonDelete radius="square" border={false} size="xs" themes="danger">
                DELETE
              </S.ButtonDelete>
            </S.ModalFooter>
          </S.ModalView>
        </S.ModalBackdrop>
      ) : null}
    </>
  );
}
export default CardModal;
