export interface BoardData {
  boardTitle: string;
  boardId: string;
  owner: string;
  lastUpdate: number;
  backgroundColor: string;
  brightness: number;
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

export interface SelectedCardData {
  isModalopen: boolean;
  boardId: string;
  listId: string;
  cardId: string;
  cardData: CardData;
}
