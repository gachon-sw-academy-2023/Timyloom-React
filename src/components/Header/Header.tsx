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
    }; //  window 에서 스크롤을 감시를 종료
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

  return (
    <>
      <S.StyledHeader ScrollActive={ScrollActive}>
        <div className="nav_logo">
          <Link to={'/'} className="nav-logo-link">
            <Logo width="45px" height="45px" />
            TimyLoom
          </Link>
        </div>
        <S.NavManu isToggleOpen={isToggleOpen}>
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
        </S.NavManu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </S.StyledHeader>
    </>
  );
}

export default Header;
