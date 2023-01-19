import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const boardsAtom = atom({
  key: 'boardsAtom',
  effects_UNSTABLE: [persistAtom],
  default: [
    {
      boardTitle: '개인 일정 정리 보드',
      boardId: '1',
      owner: 'bwj0509',
      lists: [
        {
          listTitle: '주간 할일',
          listId: '5',
          position: 0,
          cards: [
            { cardTitle: '헬스 하기', cardId: '104', position: 0 },
            { cardTitle: '버스 예매하기', cardId: '105', position: 1 },
            { cardTitle: '타입스크립트 공부', cardId: '106', position: 2 },
            { cardTitle: '독서 2권하기', cardId: '107', position: 3 },
          ],
        },
        {
          listTitle: '오늘 할일',
          listId: '6',
          position: 1,
          cards: [
            { cardTitle: 'JEST 공부', cardId: '101', position: 0 },
            { cardTitle: 'StoryBook 공부', cardId: '102', position: 1 },
            { cardTitle: 'MSW 공부', cardId: '103', position: 2 },
          ],
        },
        {
          listTitle: '이번학기 목표',
          listId: '7',
          position: 2,
          cards: [
            { cardTitle: '취업하기', cardId: '108', position: 0 },
            { cardTitle: '축구 예매하기', cardId: '109', position: 1 },
            { cardTitle: '타입스크립트 마스터', cardId: '110', position: 2 },
            { cardTitle: '독서 200권하기', cardId: '111', position: 3 },
          ],
        },
      ],
    },
    {
      boardTitle: '티미룸 협업 보드',
      boardId: '2',
      owner: 'bwj0509',
      lists: [
        {
          listTitle: '주간 할일',
          listId: '5',
          position: 0,
          cards: [
            { cardTitle: '워크스페이스 제작', cardId: '104', position: 0 },
            { cardTitle: '보드 제작', cardId: '105', position: 1 },
            { cardTitle: '카드 제작', cardId: '106', position: 2 },
            { cardTitle: '독서 2권하기', cardId: '107', position: 3 },
          ],
        },
        {
          listTitle: '프로젝트 목표',
          listId: '6',
          position: 1,
          cards: [
            { cardTitle: 'JEST 공부', cardId: '101', position: 0 },
            { cardTitle: 'StoryBook 공부', cardId: '102', position: 1 },
            { cardTitle: 'MSW 공부', cardId: '103', position: 2 },
          ],
        },
        {
          listTitle: '매일 할일',
          listId: '7',
          position: 2,
          cards: [
            { cardTitle: 'PR 보내기', cardId: '108', position: 0 },
            { cardTitle: '커밋 메세지', cardId: '109', position: 1 },
            { cardTitle: '타입스크립트 마스터', cardId: '110', position: 2 },
            { cardTitle: '멘토링', cardId: '111', position: 3 },
          ],
        },
      ],
    },
  ],
});
