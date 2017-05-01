export interface ICard {
  id?: number;
  title: string;
  description?: string;
  completed?: boolean;
  listId: number;
}

export class Card implements ICard {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  listId: number;

  constructor(
    {title, description, listId}: ICard
  ) {

    this.id = Date.now();
    this.title = title;
    this.description = description ? description : '';
    this.listId = listId;
    this.completed = false;
  }
}
