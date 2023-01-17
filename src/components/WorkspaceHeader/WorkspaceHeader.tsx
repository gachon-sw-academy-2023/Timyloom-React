import { useState, useEffect } from 'react';
import * as S from './WorkspaceHeaderStyle';
import { ReactComponent as AlarmIcon } from '@/assets/images/alarm.svg';
import Bg from '@/assets/images/profile.png';

const textNotification = `React can also render on the server using Node and power mobile apps using React Native`;

function Header() {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const [alarmNotification, setAlarmNotification] = useState('true');

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
        <S.AlarmWrapper>
          <S.ShareInfo>
            <S.InfoAvatarWrapper>
              {' '}
              <S.Avatar avatarSmall={true} src={Bg} />
              <span>@MikeCobain:</span>
            </S.InfoAvatarWrapper>
            <S.Text>{textNotification}</S.Text>
          </S.ShareInfo>
          <S.Notification></S.Notification>
          <AlarmIcon width="30" height="30" fill="gray" />
        </S.AlarmWrapper>
        <S.Avatar src={Bg} />
      </S.ProfileWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
