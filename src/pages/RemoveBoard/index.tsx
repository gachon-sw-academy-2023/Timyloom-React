import { useEffect } from 'react';
import { BoardData } from '@/type';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import * as S from '@/pages/RemoveBoard/indexStyle';
import Button from '@/components/Button/Button';
import Swal from 'sweetalert2';
import axios from 'axios';

function RemoveBoard() {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState<BoardData[]>(boardsAtom);

  const handlePage = () => {
    location.replace('/workspace/boards');
  };

  useEffect(() => {
    //db 코드
    axios
      .post('/delete/board', { boardId: boardId })
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
      timer: 10000,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: 'info',
      title: '10초 뒤에 워크스페이스로<br/>이동합니다',
    });
  }, []);

  setInterval(() => {
    location.replace('/workspace/boards');
  }, 10000);

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
