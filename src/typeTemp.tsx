export interface BoardInterface {
  boardTitle: string;
  boardId: string;
  owner: string;
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
