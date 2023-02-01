export interface BoardInterface {
  boardTitle: string;
  boardId: string;
  owner: string;
  logs: LogsInterface[];
  lists: ListInterface[];
}

export interface ListInterface {
  listTitle: string;
  listId: string;
  cards: CardInterface[];
}

export interface CardInterface {
  cardTitle: string;
  cardId: string;
}

export interface LogsInterface {
  logName: string;
  date: number;
}
