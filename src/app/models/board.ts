export interface IBoard {
  id: number;
  title: string;
}

export class Board {
  id: number;
  title: string;

  constructor(title: string) {
    this.id = Date.now();
    this.title = title;
  }
}
