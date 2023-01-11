import { atom } from 'recoil';

export const objTodosDataResult = atom({
  key: 'objTodosDataResult',
  default: [
    {
      goalTitle: '첫 번째 목표',
      goalId: 1,
      goalOrderNo: 1, //목표 순서
      goalTitleColor: '#ff0000',
      todos: [
        {
          goalId: 1,
          todoId: 1,
          orderNo: 1,
          title: '첫 번째 목표의 첫 번째 할 일',
          date: '2022-02-13',
          endRepeatDate: '2022-02-13',
          checkYn: 'N',
        },
        {
          goalId: 1,
          todoId: 2,
          orderNo: 2,
          title: '첫 번째 목표의 두 번째 할 일',
          date: '2022-02-13',
          endRepeatDate: '2022-02-14',
          checkYn: 'N',
        },
        {
          goalId: 1,
          todoId: 3,
          orderNo: 3,
          title: '첫 번째 목표의 세 번째 할 일',
          date: '2022-02-13',
          endRepeatDate: '2022-02-17',

          checkYn: 'N',
        },
        {
          goalId: 1,
          todoId: 4,
          orderNo: 4,
          title: '첫 번째 목표의 네 번째 할 일',
          date: '2022-02-13',
          endRepeatDate: '2022-02-17',

          checkYn: 'N',
        },
      ],
    },
    {
      goalTitle: '두 번째 목표',
      goalId: 2,
      goalOrderNo: 2, //목표 순서
      goalTitleColor: '#ff873d',
      todos: [
        {
          goalId: 2,
          todoId: 1,
          orderNo: 1,
          title: '두 번째 목표의 첫 번째 할 일',
          date: '2022-02-13',
          endRepeatDate: '2022-02-13',

          checkYn: 'N',
        },
        {
          goalId: 2,
          todoId: 2,
          orderNo: 2,
          title: '두 번째 목표의 두 번째 할 일',
          date: '2022-02-11',
          endRepeatDate: '2022-02-15',

          checkYn: 'N',
        },
      ],
    },
    {
      goalTitle: '세 번째 목표',
      goalId: 3,
      goalOrderNo: 3, //목표 순서
      goalTitleColor: '#0119cb',
      todos: [
        {
          goalId: 3,
          todoId: 1,
          orderNo: 1,
          title: '세 번째 목표의 첫 번째 할 일',
          date: '2022-02-16',
          endRepeatDate: '2022-02-16',

          checkYn: 'N',
        },
        {
          goalId: 3,
          todoId: 2,
          orderNo: 2,
          title: '세 번째 목표의 두 번째 할 일',
          date: '2022-02-13',
          endRepeatDate: '2022-02-19',

          checkYn: 'N',
        },
      ],
    },
    {
      goalTitle: '네 번째 목표',
      goalId: 4,
      goalOrderNo: 4, //목표 순서
      goalTitleColor: '#77ab59',
      todos: [
        {
          goalId: 4,
          todoId: 1,
          orderNo: 1,
          title: '네 번째 목표의 첫 번째 할 일',
          date: '2022-02-16',
          endRepeatDate: '2022-02-16',

          checkYn: 'N',
        },
        {
          goalId: 4,
          todoId: 2,
          orderNo: 2,
          title: '네 번째 목표의 두 번째 할 일',
          date: '2022-02-16',
          endRepeatDate: '2022-02-16',

          checkYn: 'N',
        },
        {
          goalId: 4,
          todoId: 3,
          orderNo: 3,
          title: '네 번째 목표의 세 번째 할 일',
          date: '2022-02-16',
          endRepeatDate: '2022-02-16',

          checkYn: 'N',
        },
        {
          goalId: 4,
          todoId: 4,
          orderNo: 4,
          title: '네 번째 목표의 네 번째 할 일',
          date: '2022-02-16',
          endRepeatDate: '2022-02-16',

          checkYn: 'N',
        },
      ],
    },
  ],
});
