export interface BoardData {
  boardTitle: string;
  boardId: string;
  owner: string;
  backgroundColor: string;
  brightness: number;
  logs: LogsInterface[];
  lists: ListData[];
}

export interface ListData {
  listTitle: string;
  listId: string;
  cards: CardData[];
}

export interface CardData {
  cardTitle: string;
  cardId: string;
  cardDescription: string;
  isDone: boolean;
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

export interface SelectedCardData {
  isModalopen: boolean;
  boardId: string;
  listId: string;
  cardId: string;
  cardData: CardDataInterface;
}
