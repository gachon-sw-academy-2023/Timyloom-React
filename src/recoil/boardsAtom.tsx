import { atom } from 'recoil';

export const boardsAtom = atom({
  key: 'boardsAtom',
  // default: [
  //   [
  //     { id: 'item-0-1673846152740', content: 'item-0' },
  //     { id: 'item-1-1673846152740', content: 'item-1' },
  //     { id: 'item-2-1673846152740', content: 'item-2' },
  //     { id: 'item-3-1673846152740', content: 'item-3' },
  //   ],
  //   [
  //     { id: 'item-10-1673846152740', content: 'item-10' },
  //     { id: 'item-11-1673846152740', content: 'item-11' },
  //     { id: 'item-12-1673846152740', content: 'item-12' },
  //     { id: 'item-13-1673846152740', content: 'item-13' },
  //     { id: 'item-14-1673846152740', content: 'item-14' },
  //     { id: 'item-15-1673846152740', content: 'item-15' },
  //   ],
  // ],
  default: {
    boardTitle: '개인 일정 정리 보드',
    boardId: '0',
    lists: [
      {
        listTitle: '오늘 할일',
        listId: '0',
        position: 0,
        cards: [
          { cardTitle: 'JEST 공부', cardId: '0', position: 0 },
          { cardTitle: 'StoryBook 공부', cardId: '1', position: 1 },
          { cardTitle: 'MSW 공부', cardId: '2', position: 2 },
          { cardTitle: '워크스페이스 만들기', cardId: '3', position: 3 },
        ],
      },
      {
        listTitle: '주간 할일',
        listId: '1',
        position: 1,
        cards: [
          { cardTitle: '헬스 하기', cardId: '4', position: 0 },
          { cardTitle: '버스 예매하기', cardId: '5', position: 1 },
          { cardTitle: '타입스크립트 공부', cardId: '6', position: 2 },
          { cardTitle: '독서 2권하기', cardId: '7', position: 3 },
        ],
      },
      {
        listTitle: '이번학기 목표',
        listId: '2',
        position: 2,
        cards: [
          { cardTitle: '취업하기', cardId: '8', position: 0 },
          { cardTitle: '축구 예매하기', cardId: '9', position: 1 },
          { cardTitle: '타입스크립트 마스터', cardId: '10', position: 2 },
          { cardTitle: '독서 200권하기', cardId: '11', position: 3 },
        ],
      },
    ],
  },
});
