import * as S from '@/components/RemoveCard/RemoveCardStyle';
import Button from '@/components/Button/Button';

function RemoveCard() {
  const handlePage = () => {
    location.href = '/workspace';
  };

  return (
    <S.CardWrapper>
      <S.CardTitle>보드를 삭제하였습니다.</S.CardTitle>
      <Button themes="sign" onClick={handlePage}>
        Move to Main
      </Button>
    </S.CardWrapper>
  );
}

export default RemoveCard;
