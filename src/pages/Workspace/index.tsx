import Sidebar from '@/components/Sidebar/Sidebar';
import WorkspaceHeader from '@/components/WorkspaceHeader/WorkspaceHeader';
import * as S from '@/pages/Workspace/indexStyle';
import { useEffect, useState, useRef } from 'react';
import { useDidMountEffect } from '../../hooks/useDidMountEffect';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boardsAtom';
import { defaultData } from '@/components/Board/BoardData';
import Modal from '@/components/Modal/Modal';

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

function Workspace() {
  const [boards, setBoards] = useRecoilState(boardsAtom);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const scrollRef: any = useRef();
  const screenView = 300;
  let personalBoards = boards.filter((board) => board.owner === localStorage.getItem('id'));

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > screenView) {
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
    <S.WorkspaceWrapper ref={scrollRef}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <S.PageWrapper isOpen={sidebarOpen}>
        <WorkspaceHeader />
        <S.ContentWrapper isOpen={sidebarOpen}>
          <S.BoardContainer>
            {personalBoards.map((board, index) => (
              // <Board title={board.boardTitle} board={board} />
              <S.BoardWrapper key={index} to={`/board/${board.boardId}`}>
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
      </S.PageWrapper>
      {showTopBtn && <S.ScrollToTopSvg onClick={goToTop}>Top</S.ScrollToTopSvg>}
      <Modal showModal={showModal} setShowModal={setShowModal} themes={'board'}></Modal>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
