import { atom } from 'recoil';

export const taskAtom = atom({
  key: 'task',
  default: [
    {
      owner: 'bwj0509',
      boardTitle: '개인 할일 보드',
      boardId: '1',
      list: [
        {
          listTitle: '당장에 해야 할일',
          listId: '1',
          card: [
            {
              cardTitle: '화분에 물주기',
              cardId: '1',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
            {
              cardTitle: '독서하기',
              cardId: '2',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
            {
              cardTitle: '보고서 업로드',
              cardId: '3',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
            {
              cardTitle: '요리하기',
              cardId: '4',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
          ],
        },
        {
          listTitle: '투데이 스크럼',
          listId: '2',
          card: [
            {
              cardTitle: 'JEST 설정',
              cardId: '1',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
            {
              cardTitle: 'Storybook 설정',
              cardId: '2',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
            {
              cardTitle: 'React 설정',
              cardId: '3',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
            {
              cardTitle: 'styled-componet 설정',
              cardId: '4',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
          ],
        },
        {
          listTitle: '문서화 할 것들',
          listId: '3',
          card: [
            {
              cardTitle: '멘토링 보고서',
              cardId: '1',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
            {
              cardTitle: '요구사항 분석서',
              cardId: '2',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
            {
              cardTitle: 'WBS',
              cardId: '3',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
            {
              cardTitle: 'CDC 구현 보고서',
              cardId: '4',
              startdate: '2023-01-12',
              endDate: '2023-01-12',
            },
          ],
        },
      ],
    },
  ],
});
