import {Action} from '@ngrx/store';
import {IList} from '../models/list';

const prefix = '[List]';

export const ADD_LIST = `${prefix} Add`;
export const REMOVE_LIST = `${prefix} Remove`;
export const UPDATE_LIST = `${prefix} Update`;

export class AddList implements Action {
  readonly type = ADD_LIST;

  constructor(public payload: IList) {}
}

export class RemoveList implements Action {
  readonly type = REMOVE_LIST;

  constructor(public payload: number) {}
}

export class UpdateList implements Action {
  readonly type = UPDATE_LIST;

  constructor(public payload: {id: number, title: string}) {}
}

export type Action
  = AddList
  | RemoveList
  | UpdateList;
