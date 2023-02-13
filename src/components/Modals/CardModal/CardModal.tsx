import { useState, useRef, useCallback, useEffect } from 'react';
import { useDidMountEffect } from '@/hooks/useDidMountEffect';
import { SelectedCardData, BoardData, ListData, CardData } from '@/type';
import * as S from '@/components/Modals/CardModal/CardModalStyle';
import Button from '@/components/Button/Button';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import { selectedCardAtom } from '@/recoil/selectedCard';
import { todayDate } from '@/utils/standardDateFormat';
import axios from 'axios';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { FcClock } from 'react-icons/fc';
import { FaMap } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { GrPowerReset } from 'react-icons/gr';

interface DateRefProps {
  ref: React.LegacyRef<HTMLInputElement> | null;
}

function CardModal() {
  const [selectedCard, setSelectedCard] = useRecoilState<SelectedCardData>(selectedCardAtom);
  const [boards, setBoards] = useRecoilState<BoardData[]>(boardsAtom);
  const [cardTitle, setCardTitle] = useState<string>(selectedCard.cardData.cardTitle);
  const [cardDescription, setCardDescription] = useState<string>(selectedCard.cardData.cardDescription);
  const [selectedDayRange, setSelectedDayRange] = useState(selectedCard.cardData.date);
  const cardTitleTextRef = useRef(null);
  const cardDesciptionTextRef = useRef(null);

  const handleResizeHeight = useCallback(() => {
    cardTitleTextRef.current.style.height = cardTitleTextRef.current.scrollHeight + 'px';
    cardDesciptionTextRef.current.style.height = cardDesciptionTextRef.current.scrollHeight + 'px';
  }, []);

  const handleModal = () => {
    setSelectedCard((prev) => ({ ...prev, isModalopen: !prev.isModalopen }));
  };

  const startDate = selectedDayRange.from
    ? `${selectedDayRange.from.year}-${selectedDayRange.from.month}-${selectedDayRange.from.day}`
    : `not select`;
  const endDate = selectedDayRange.to
    ? `${selectedDayRange.to.year}-${selectedDayRange.to.month}-${selectedDayRange.to.day}`
    : `not select`;

  useEffect(() => {
    {
      selectedCard.isModalopen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
    }
  }, [selectedCard.isModalopen]);

  useDidMountEffect(() => {
    if (selectedDayRange.to !== null && selectedDayRange.from !== null) {
      updateDayInfo();
    }
  }, [selectedDayRange]);

  const resetDate = () => {
    setSelectedDayRange(todayDate);
  };

  const updateDayInfo = () => {
    // axios 작성 부분
    const [board] = boards.filter((board) => board.boardId === selectedCard.boardId);
    const newBoard = {
      ...board,
      lists: board.lists.map((list: ListData) =>
        list.listId === selectedCard.listId
          ? {
              ...list,
              cards: list.cards.map((card: CardData) =>
                card.cardId === selectedCard.cardId ? { ...card, date: selectedDayRange } : card,
              ),
            }
          : list,
      ),
    };
    axios
      .post('/update/board', newBoard)
      .then((res) => {
        switch (res.status) {
          case 200:
            setBoards((prev) => res.data);
            break;
          default:
            break;
        }
      })
      .catch((error) => alert(error));
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardTitle((prev) => e.target.value);
  };
  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCardDescription((prev) => e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>, dataName: string) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      removeFocus();
      e.preventDefault();
      updateModalData(dataName);
    }
  };

  const removeFocus = () => {
    (document.activeElement as HTMLElement).blur();
  };

  const updateModalData = (dataName: string) => {
    const [board] = boards.filter((board) => board.boardId === selectedCard.boardId);
    const newBoard = {
      ...board,
      lists: board.lists.map((list: ListData) =>
        list.listId === selectedCard.listId
          ? {
              ...list,
              cards: list.cards.map((card: CardData) => {
                switch (dataName) {
                  case 'cardTitle':
                    return card.cardId === selectedCard.cardId ? { ...card, cardTitle: cardTitle } : card;
                  case 'cardDescription':
                    return card.cardId === selectedCard.cardId ? { ...card, cardDescription: cardDescription } : card;
                  default:
                    break;
                }
              }),
            }
          : list,
      ),
    };
    axios
      .post('/update/board', newBoard)
      .then((res) => {
        switch (res.status) {
          case 200:
            setBoards((prev) => res.data);
            break;
          default:
            break;
        }
      })
      .catch((error) => alert(error));
  };

  const renderCustomInput = ({ ref }: DateRefProps) => (
    <S.DateCustomInput
      readOnly
      ref={ref}
      placeholder="Select a day range"
      value={selectedCard.cardData.date.to !== null ? `${startDate} ~ ${endDate}` : ''}
    />
  );

  if (selectedCard.isModalopen)
    return (
      <S.ModalBackdrop>
        <S.ModalView>
          <S.ModalHeader>
            <S.ModalCloseBtn onClick={handleModal}>
              <CgClose size="25" color="black" />
            </S.ModalCloseBtn>
            <S.TitlelIcon size="30" />
            <S.ModalTitle
              ref={cardTitleTextRef}
              onInput={handleResizeHeight}
              spellCheck="false"
              value={cardTitle}
              onChange={handleChangeTitle}
              onKeyDown={(e) => {
                handleKeyDown(e, 'cardTitle');
              }}
              onBlur={() => {
                updateModalData('cardTitle');
              }}
            >
              {selectedCard.cardData.cardTitle}
            </S.ModalTitle>
            <S.ModalDescription
              ref={cardDesciptionTextRef}
              onInput={handleResizeHeight}
              spellCheck="false"
              value={cardDescription}
              onChange={handleChangeDescription}
              onKeyDown={(e) => {
                handleKeyDown(e, 'cardDescription');
              }}
              placeholder="Add your description"
              onBlur={() => {
                updateModalData('cardDescription');
              }}
            >
              {selectedCard.cardData.cardDescription}
            </S.ModalDescription>
          </S.ModalHeader>
          <S.ModalOptionContainer>
            <S.OptionWrapper>
              <S.OptionTitleWrapper>
                <FcClock size="30" />
                <S.OptionTitle>Date</S.OptionTitle>
                <Button radius="square" border={false} size="xs" themes="reset" onClick={resetDate}>
                  <GrPowerReset size="20" />
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
