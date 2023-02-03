import { MouseEventHandler, useState, useEffect, useRef } from 'react';
import { CgClose } from 'react-icons/cg';
import * as S from '@/components/Modals/CardModal/CardModalStyle';
import Button from '@/components/Button/Button';
import Label from '@/components/Label/Label';
import { FaBookmark } from 'react-icons/fa';
import { FcClock } from 'react-icons/fc';
import { FaMap } from 'react-icons/fa';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';

interface ModalProps {
  showModal: boolean;
  setShowModal: Function;
  data: ModalDataProps;
}

interface ModalDataProps {
  cardTitle: string;
  cardId: string;
}

interface DateRefProps {
  ref: React.LegacyRef<HTMLInputElement> | null;
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

  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null,
  });

  const resetDate = () => {
    setSelectedDayRange({
      from: null,
      to: null,
    });
  };

  const renderCustomInput = ({ ref }: DateRefProps) => (
    <S.DateCustomInput readOnly ref={ref} placeholder="Select a day range" value={selectedDayRange.from ? `✅` : ''} />
  );
  if (showModal)
    return (
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
              <Label />
            </S.OptionWrapper>
            <S.OptionWrapper>
              <S.OptionTitleWrapper>
                <FcClock size="30" />
                <S.OptionTitle>Date</S.OptionTitle>
                <Button radius="square" border={false} size="xs" themes="sign" onClick={resetDate}>
                  reset
                </Button>
              </S.OptionTitleWrapper>
              <DatePicker
                value={selectedDayRange}
                onChange={setSelectedDayRange}
                colorPrimary="#0fbcf9"
                colorPrimaryLight="rgba(75, 207, 250, 0.4)"
                renderInput={renderCustomInput}
                shouldHighlightWeekends
              />
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
            <S.FooTerButtonContainer>
              <Button radius="square" border={false} size="xs" themes="sign">
                SAVE
              </Button>
              <Button radius="square" border={false} size="xs" themes="danger">
                DELETE
              </Button>
            </S.FooTerButtonContainer>
          </S.ModalFooter>
        </S.ModalView>
      </S.ModalBackdrop>
    );
}
export default CardModal;
