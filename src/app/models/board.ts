export interface IBoard {
  id: number;
  title: string;
  description: string;
}

export class Board {
  id: number = Date.now();
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
