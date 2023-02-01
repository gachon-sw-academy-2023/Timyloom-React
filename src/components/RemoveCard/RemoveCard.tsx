import * as S from '@/components/RemoveCard/RemoveCardStyle';
import Button from '@/components/Button/Button';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RemoveCard() {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate('workspace');
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
    navigate('/workspace/boards');
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
