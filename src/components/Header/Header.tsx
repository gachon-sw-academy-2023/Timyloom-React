import { useState } from 'react';
import { movePage } from '@/utils/movePage';
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

  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <S.LogoLink to={'/'}>
          <S.Test>Timyloom</S.Test>
        </S.LogoLink>
      </S.LogoWrapper>
      <S.NavMenu isToggleOpen={isToggleOpen}>
        {localStorage.getItem('id') ? (
          <S.NameBox onClick={handleLogout}>
            Welcome! <b>{localStorage.getItem('id')}</b>
          </S.NameBox>
        ) : (
          <>
            <S.NavMenuContent>
              <S.MenuLink to={'/login'}>Login</S.MenuLink>
            </S.NavMenuContent>
            <S.NavMenuContent>
              <S.MenuLink to={'/signup'}>Signin</S.MenuLink>
            </S.NavMenuContent>
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
