import { useState, useEffect } from 'react';
import { useDidMountEffect } from '@/hooks/useDidMountEffect';
import { SelectedCardData, BoardData, ListData, CardData } from '@/type';
import * as S from '@/components/Modals/CardModal/CardModalStyle';
import Button from '@/components/Button/Button';
import Label from '@/components/Label/Label';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import { selectedCardAtom } from '@/recoil/selectedCard';

import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import { FaBookmark } from 'react-icons/fa';
import { FcClock } from 'react-icons/fc';
import { FaMap } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

interface DateRefProps {
  ref: React.LegacyRef<HTMLInputElement> | null;
}

function CardModal() {
  const [selectedCard, setSelectedCard] = useRecoilState<SelectedCardData>(selectedCardAtom);
  const [boards, setBoards] = useRecoilState<BoardData>(boardsAtom);
  const [cardTitle, setCardTitle] = useState<string>(selectedCard.cardData.cardTitle);
  const [cardDescription, setCardDescription] = useState<string>(selectedCard.cardData.cardDescription);

  const handleModal = () => {
    setSelectedCard((prev) => ({ ...prev, isModalopen: !prev.isModalopen }));
  };

  const [selectedDayRange, setSelectedDayRange] = useState(selectedCard.cardData.date);
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
    setSelectedDayRange({
      from: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
      },
      to: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate(),
      },
    });
  };

  const updateDayInfo = () => {
    const newBoards = boards.map((board: BoardData) =>
      board.boardId === selectedCard.boardId
        ? {
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
          }
        : board,
    );
    setBoards((prev) => newBoards);
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
      updateData(dataName);
    }
  };

  const removeFocus = () => {
    (document.activeElement as HTMLElement).blur();
  };

  const updateData = (dataName: string) => {
    const newBoards = boards.map((board: BoardData) =>
      board.boardId === selectedCard.boardId
        ? {
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
                          return card.cardId === selectedCard.cardId
                            ? { ...card, cardDescription: cardDescription }
                            : card;
                        default:
                          break;
                      }
                    }),
                  }
                : list,
            ),
          }
        : board,
    );
    setBoards((prev) => newBoards);
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
            <S.ModalTitle
              cardTitle={selectedCard.cardData.cardTitle}
              spellCheck="false"
              value={cardTitle}
              onChange={handleChangeTitle}
              onKeyDown={(e) => {
                handleKeyDown(e, 'cardTitle');
              }}
              onBlur={() => {
                updateData('cardTitle');
              }}
            >
              <S.TitlelIcon size="30" />
              {selectedCard.cardData.cardTitle}
            </S.ModalTitle>
            <S.ModalDescription
              cardDescription={selectedCard.cardData.cardDescription}
              spellCheck="false"
              value={cardDescription}
              onChange={handleChangeDescription}
              onKeyDown={(e) => {
                handleKeyDown(e, 'cardDescription');
              }}
              onBlur={() => {
                updateData('cardDescription');
              }}
            >
              {selectedCard.cardData.cardDescription}
            </S.ModalDescription>
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
