import shortid from 'shortid';
import { getRandomColor } from '@/utils/getRandomColor';

export const defaultData = () => {
  const boardUId = shortid.generate();
  const listUId = shortid.generate();
  const cardUId = shortid.generate();
  const data = {
    boardTitle: '새로운 보드',
    boardId: `b-${boardUId}`,
    lastUpdate: new Date().getTime(),
    owner: localStorage.getItem('id'),
    backgroundColor: getRandomColor().colorCode,
    brightness: getRandomColor().brightness,
    lists: [],
  };
  return data;
};
