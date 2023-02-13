import { useState } from 'react';
import * as S from '@/components/Board/AddCardStyle';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import shortid from 'shortid';
import { BoardData } from '@/type';
import { temporaryBoardAtom } from '@/recoil/temporaryBoard';
import axios from 'axios';

interface AddCardProps {
  listId: string;
}

function AddCard({ listId }: AddCardProps) {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState<BoardData[]>(boardsAtom);
  const [addStatus, setAddStatus] = useState<boolean>(false);
  const [cardTitle, setCardTitle] = useState<string>('');
  const [temporaryBoard, setTemporaryBoard] = useRecoilState<any[]>(temporaryBoardAtom);

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
    const cardId = shortid.generate();
    //axios 추가하고 있는 부분!
    const [board] = boards.filter((board) => board.boardId === boardId);
    const newBoard = {
      ...board,
      lists: board.lists.map((list) =>
        list.listId === listId
          ? {
              ...list,
              cards: [
                ...list.cards,
                {
                  cardTitle: cardTitle,
                  cardId: `c-${cardId}`,
                  cardDescription: '',
                  isDone: false,
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
          : list,
      ),
    };
    axios
      .post(`/update/board`, newBoard)
      .then((res) => {
        switch (res.status) {
          case 200:
            setBoards((prev) => res.data);
            break;
          default:
            break;
        }
      })
      .catch((Error) => {
        alert(Error);
      });
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
