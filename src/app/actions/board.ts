import {Action} from '@ngrx/store';
import {IBoard} from '../models/board';

const prefix = '[Board]';

export const ADD_BOARD = `${prefix} Add`;
export const REMOVE_BOARD = `${prefix} Remove`;
export const UPDATE_BOARD = `${prefix} Update`;

export class AddBoard implements Action {
  readonly type = ADD_BOARD;

  constructor(public payload: IBoard) {}
}

export class RemoveBoard implements Action {
  readonly type = REMOVE_BOARD;

  constructor(public payload: number /* board id */) {}
}

export class UpdateBoard implements Action {
  readonly type = UPDATE_BOARD;

  constructor(public payload: {id: number, title: string}) {}
}

export type Action
  = AddBoard
  | RemoveBoard
  | UpdateBoard;
