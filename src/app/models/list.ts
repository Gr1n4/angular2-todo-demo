export interface IList {
  id: number;
  title: string;
  boardId: number;
}

export class List implements IList {
  id: number;
  title: string;
  boardId: number;

  constructor(title: string, boardId: number) {
    this.id = Date.now();
    this.title = title;
    this.boardId = boardId;
  }
}
