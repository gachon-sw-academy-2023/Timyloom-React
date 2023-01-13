import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle';
import { FaBars } from 'react-icons/fa';

function Header() {
  const MIN_PIXEL = 100;
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  function handleScroll() {
    if (ScrollY > MIN_PIXEL) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('id');
    document.location.href = '/';
  };
  return (
    <S.HeaderWrapper ScrollActive={ScrollActive}>
      <S.LogoWrapper>
        <S.LogoLink to={'/'} ScrollActive={ScrollActive}>
          <S.Logo />
        </S.LogoLink>
      </S.LogoWrapper>
      <S.NavMenu isToggleOpen={isToggleOpen}>
        {localStorage.getItem('id') ? (
          <S.NameBox onClick={handleLogout} ScrollActive={ScrollActive}>
            Welcome! <b>{localStorage.getItem('id')}</b>
          </S.NameBox>
        ) : (
          <>
            <S.NavMenuContent>
              <S.MenuLink to={'/login'}>LOGIN</S.MenuLink>
            </S.NavMenuContent>
            <S.NavMenuContent>
              <S.MenuLink to={'/signup'}>SIGNUP</S.MenuLink>
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
