import { useState } from 'react';
import * as S from '@/components/Board/AddCardStyle';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import shortid from 'shortid';
import { BoardInterface } from '@/type';
import { temporaryBoardAtom } from '@/recoil/temporaryBoardAtom';

interface AddCardProps {
  listId: string;
}

function AddCard({ listId }: AddCardProps) {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState<BoardInterface[]>(boardsAtom);
  const [addStatus, setAddStatus] = useState<boolean>(false);
  const [cardTitle, setCardTitle] = useState<string>('');
  const [temporaryBoard, setTemporaryBoard] = useRecoilState<any>(temporaryBoardAtom);

  const handleStatusTrue = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAddStatus(true);
  };

  const handleStatusFalse = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setAddStatus(false);
      saveCard();
    } else if (e.key === 'Escape') {
      setAddStatus(false);
    }
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  const saveCard = () => {
    setTemporaryBoard((prev) => [...prev, boards]);
    let cardId = shortid.generate();
    let log = {
      logName: `${cardTitle} 카드 생성`,
      date: new Date().getTime(),
    };
    let tempBoard = boards.map((board, index) =>
      board.boardId === boardId
        ? {
            ...board,
            logs: [...board.logs, log],
            lists: board.lists.map((list) => {
              return list.listId == listId
                ? {
                    ...list,
                    cards: [
                      ...list.cards,
                      {
                        cardTitle: cardTitle,
                        cardId: `c-${cardId}`,
                        cardDescription: 'Add your description',
                        date: {
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
                        },
                      },
                    ],
                  }
                : list;
            }),
          }
        : board,
    );
    setBoards((prev) => tempBoard);
  };
  return (
    <S.AddCardWrapper>
      {addStatus ? (
        <S.AddCardInput
          onChange={handleChangeTitle}
          onKeyDown={handleStatusFalse}
          onBlur={() => {
            setAddStatus(false);
          }}
          autoFocus
        ></S.AddCardInput>
      ) : (
        <S.AddCardBtn onClick={handleStatusTrue}>+ Add a Card</S.AddCardBtn>
      )}
    </S.AddCardWrapper>
  );
}

export default AddCard;
