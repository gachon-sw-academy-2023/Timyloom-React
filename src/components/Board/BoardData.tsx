import shortid from 'shortid';

interface DataInterface {
  boardTitle: string;
  boardId: string;
  owner: string;
  backgroundColor: string;
  brightness: number;
  logs: any[];
  lists: any[];
}

export const defaultData = () => {
  const boardUId = shortid.generate();
  const listUId = shortid.generate();
  const cardUId = shortid.generate();
  const data: DataInterface = {
    boardTitle: '새로운 보드',
    boardId: `b-${boardUId}`,
    owner: localStorage.getItem('id'),
    backgroundColor: '#ffffff',
    brightness: 255,
    logs: [],
    lists: [],
  };
  return data;
};
