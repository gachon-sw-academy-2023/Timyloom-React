import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './HeaderStyle';
import { FaBars } from 'react-icons/fa';

import { ReactComponent as Logo } from '@/assets/images/logo.svg';

function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
  const [ScrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  function handleScroll() {
    if (ScrollY > 100) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  }

  const onLogout = () => {
    localStorage.removeItem('id');
    document.location.href = '/';
  };
  return (
    <>
      <S.StyledHeader ScrollActive={ScrollActive}>
        <div className="nav_logo">
          <Link to={'/'} className="nav-logo-link">
            <Logo width="45px" height="45px" />
            TimyLoom
          </Link>
        </div>
        <S.NavMenu isToggleOpen={isToggleOpen}>
          {localStorage.getItem('id') ? (
            <S.NameBox onClick={onLogout} ScrollActive={ScrollActive}>
              Welcome! <b>{localStorage.getItem('id')}</b>
            </S.NameBox>
          ) : (
            <>
              <li>
                <Link to={'/login'} className="nav-menu-list">
                  LOGIN
                </Link>
              </li>
              <li>
                <Link to={'/signup'} className="nav-menu-list">
                  SIGNUP
                </Link>
              </li>
            </>
          )}
        </S.NavMenu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </S.StyledHeader>
    </>
  );
}

export default Header;
