import {Action} from '@ngrx/store';
import {IBoard} from '../models/board';

const prefix = '[Board]';

export const ADD_BOARD = `${prefix} Add`;

export class AddBoard implements Action {
  readonly type = ADD_BOARD;

  constructor(public payload: IBoard) {}
}

export type Action
  = AddBoard;
