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
  cardDescription: string;
  date: DateRangeInterface;
}

export interface DateRangeInterface {
  from: DateInterface;
  to: DateInterface;
}

export interface DateInterface {
  year: number;
  month: number;
  day: number;
}

export interface LogsInterface {
  logName: string;
  date: number;
}

export interface SelectedCardInterface {
  isModalopen: boolean;
  boardId: string;
  listId: string;
  cardId: string;
  cardData: CardInterface;
}
