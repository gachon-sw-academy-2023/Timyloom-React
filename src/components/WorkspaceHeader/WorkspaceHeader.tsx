import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './WorkspaceHeaderStyle';
import { Avatar } from '@mui/material';
import { ReactComponent as AlarmIcon } from '@/assets/images/alarm.svg';

function Header() {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <S.HeaderWrapper>
      <S.SearchWrapper>
        <S.Search type="search" placeholder="Search for Boards here" onChange={handleSearchChange}></S.Search>
        <S.SearchIcon />
      </S.SearchWrapper>
      <S.ProfileWrapper>
        <div>
          <AlarmIcon width="20" height="20" fill="gray" />
        </div>
        <Avatar>H</Avatar>
      </S.ProfileWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
