import { useEffect } from 'react';
import { BoardData } from '@/type';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import * as S from '@/pages/RemoveBoard/indexStyle';
import Button from '@/components/Button/Button';
import Swal from 'sweetalert2';

function RemoveBoard() {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState<BoardData[]>(boardsAtom);

  useEffect(() => {
    setBoards((prev) => boards.filter((board) => board.boardId !== boardId));
  }, []);

  const handlePage = () => {
    location.replace('/workspace/boards');
  };

  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-right',
      iconColor: 'white',
      background: 'lightskyblue',
      color: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: 'info',
      title: '5초 뒤에 워크스페이스로<br/>이동합니다',
    });
  }, []);

  setInterval(() => {
    location.replace('/workspace/boards');
  }, 5000);

  return (
    <S.Container>
      <S.RemoveCardWrapper>
        <S.GearSvg />
        <S.CardTitle size="2.5rem">보드를 삭제하였습니다.</S.CardTitle>
        <S.CardTitle size="2.1rem">삭제된 보드는 30일간 보관되며 이후에 영구삭제됩니다.</S.CardTitle>
        <Button themes="remove" size="md" border={false} radius="square" onClick={handlePage}>
          Move to Workspace
        </Button>
      </S.RemoveCardWrapper>
    </S.Container>
  );
}

export default RemoveBoard;
