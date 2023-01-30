import styled from 'styled-components';
import { ReactComponent as SearchSvg } from '@/assets/images/search.svg';
import { ReactComponent as Alarm } from '@/assets/images/alarm.svg';

export const AlarmIcon = styled((props) => <Alarm {...props} />)`
  width: 35px;
  height: 35px;
  fill: gray;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 12vh;
  min-height: 100px;
  border-bottom: 2px solid ${(props) => props.theme.gray_3};

  @media screen and (max-width: 768px) {
    justify-content: right;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  margin: auto 30px auto 70px;
  user-select: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Search = styled.input`
  width: 14vw;
  min-width: 250px;
  height: 50px;
  background-color: ${(props) => props.theme.primaryColor_1};
  border-radius: 10px;
  font-size: 17px;
  text-align: left;
  color: #696974;
  padding-left: 45px;
  padding-right: 20px;
  border: none;
  transition: all 400ms;
  outline: none;
  &:focus {
    width: 25vw;
  }
`;
export const SearchIcon = styled(SearchSvg)`
  position: absolute;
  pointer-events: none;
  top: 0.8rem;
  left: 0.5rem;
  width: 25px;
  height: 25px;
`;
export const ProfileWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3fr 3fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 0.5fr;
  }
`;

export const Avatar = styled.img<{ avatarSmall?: boolean }>`
  width: ${(props) => (props.avatarSmall ? '30px' : '60px')};
  height: ${(props) => (props.avatarSmall ? '30px' : '60px')};
  border-radius: 40px;
`;

export const Notification = styled.div`
  background-color: #fc5a5a;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  position: absolute;
  right: -4px;
  top: 0px;
  opacity: 1;
  transition: opacity 0.4s;
`;
export const ShareInfo = styled.div`
  z-index: 10;
  width: 200px;
  display: none;
  flex-direction: column;
  position: absolute;
  top: 35px;
  right: -50px;
  background: #ffffff;
  border: 1px solid #f1f1f5;
  box-shadow: 0 5px 15px rgba(68, 68, 79, 0.1);
  border-radius: 8px;
  color: #696974;
  font-size: 12px;
  padding: 15px;
`;
export const AlarmWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover ${Notification} {
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover ${ShareInfo} {
    display: flex;
  }
`;

export const InfoAvatarWrapper = styled.div`
  display: flex;
  width: 25px;
  align-items: center;
  span {
    margin: 0 0 0 10px;
  }
`;

export const Text = styled.span`
  font-style: italic;
  margin: 10px 0 0 0;
`;
