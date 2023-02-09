import { useState, useEffect } from 'react';
import * as S from './WorkspaceHeaderStyle';
import { ReactComponent as AlarmIcon } from '@/assets/images/alarm.svg';
import Avatar from '@/assets/images/avatar.jpg';

const textNotification = `React can also render on the server using Node and power mobile apps using React Native`;

interface HeaderProps {
  setSearchTerm: Function;
}

function Header({ setSearchTerm }: HeaderProps) {
  const [alarmNotification, setAlarmNotification] = useState('true');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm((prev: string) => e.target.value);
  };

  return (
    <S.HeaderWrapper>
      <S.SearchWrapper>
        <S.Search
          id="search"
          type="search"
          placeholder="Search for Boards here"
          onChange={handleSearchChange}
        ></S.Search>
        <S.SearchIcon />
      </S.SearchWrapper>
      <S.ProfileWrapper>
        <S.AlarmWrapper>
          <S.ShareInfo>
            <S.InfoAvatarWrapper>
              {' '}
              <S.Avatar avatarSmall={true} src={Avatar} />
              <span>@MikeCobain:</span>
            </S.InfoAvatarWrapper>
            <S.Text>{textNotification}</S.Text>
          </S.ShareInfo>
          <S.Notification></S.Notification>
          <AlarmIcon width="25" height="25" fill="gray" />
        </S.AlarmWrapper>
        <S.Avatar src={Avatar} />
      </S.ProfileWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
