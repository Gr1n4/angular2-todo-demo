import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {IBoard, Board} from '../../models/board';

// export interface IBoard {
//   id: number;
//   title: string;
//   description: string;
// }

@Component({
  selector: 'app-board-item',
  template: require('pug-loader!./board-item.component.pug')(),
  styleUrls: ['./board-item.component.sass']
})
export class BoardItemComponent implements OnInit {
  @Input() board: Board;
  @Output() onRemove = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  removeBoard(e) {
    e.stopPropagation();
    e.preventDefault();
    this.onRemove.emit(this.board.id);
  }

}
