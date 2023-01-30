import WorkspaceHeader from '@/components/WorkspaceHeader/WorkspaceHeader';
import * as S from '@/pages/Boards/indexStyle';
import { useEffect, useState, useRef } from 'react';
import { useDidMountEffect } from '../../hooks/useDidMountEffect';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import { defaultData } from '@/components/Board/BoardData';

const handleAddBoard = (boards: any, setBoards: any) => {
  let newData = defaultData();
  let newBoards = [...JSON.parse(JSON.stringify(boards)), newData];
  setBoards((prev: any) => newBoards);
};

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function Boards() {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const scrollRef: any = useRef();
  let personalBoards = boards.filter((board) => board.owner === localStorage.getItem('id'));

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  useDidMountEffect(() => {
    window.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [boards.length]);

  return (
    <div>
      <S.ContentWrapper>
        <WorkspaceHeader />
        <S.BoardContainer>
          {personalBoards.map((board, index) => (
            <S.BoardWrapper key={index} to={`/workspace/${board.boardId}`}>
              <S.BoardTitle>{board.boardTitle}</S.BoardTitle>
              <S.ImageWrapper />
            </S.BoardWrapper>
          ))}
          <S.AddBoardButton
            onClick={() => {
              handleAddBoard(boards, setBoards);
              setShowModal(!showModal);
            }}
          >
            보드 추가하기!
            <S.AddSvg />
          </S.AddBoardButton>
        </S.BoardContainer>
      </S.ContentWrapper>
    </div>
  );
}

export default Boards;
