import * as S from '@/components/RemoveCard/RemoveCardStyle';
import Button from '@/components/Button/Button';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

function RemoveCard() {
  const handlePage = () => {
    location.href = '/workspace';
  };

  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-right',
      iconColor: 'white',
      customClass: {
        popup: 'colored-toast',
      },
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
    });
    Toast.fire({
      title: '5초뒤에 워크스페이스로 이동합니다',
    });
  }, []);

  setInterval(() => {
    location.href = '/workspace/boards';
  }, 5000);

  return (
    <S.CardWrapper>
      <S.CardTitle size="1.5rem">보드를 삭제하였습니다.</S.CardTitle>
      <S.CardTitle size="1.3rem">삭제된 보드는 30일간 보관되며 이후에 영구삭제 됩니다.</S.CardTitle>
      <Button themes="sign" onClick={handlePage}>
        Move to Workspace
      </Button>
    </S.CardWrapper>
  );
}

export default RemoveCard;
