import { useState } from 'react';
import * as S from './HeaderStyle';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('id');
    document.location.href = '/';
  };

  const handleMoveLogin = () => {
    document.location.href = '/login';
  };

  const handleMoveSignup = () => {
    document.location.href = '/signup';
  };

  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <S.LogoLink to={'/'}>
          <S.Logo>Timyloom</S.Logo>
        </S.LogoLink>
      </S.LogoWrapper>
      <S.NavMenu isToggleOpen={isToggleOpen}>
        {localStorage.getItem('id') ? (
          <S.NameBox onClick={handleLogout}>
            Welcome! <b>{localStorage.getItem('id')}</b>
          </S.NameBox>
        ) : (
          <>
            <S.LoginBtn onClick={handleMoveLogin}>Login</S.LoginBtn>
            <S.SigninBtn onClick={handleMoveSignup}>Signup</S.SigninBtn>
          </>
        )}
      </S.NavMenu>
      <S.ToggleWrapper>
        <FaBars onClick={handleToggleOpen} />
      </S.ToggleWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
