import {Action} from '@ngrx/store';

import {ICard} from '../models/card';

const prefix = '[Card]';

export const ADD_CARD = `${prefix} Add`;
export const UPDATE_CARD = `${prefix} Update`;
export const REMOVE_CARD = `${prefix} Remove`;
export const REMOVE_CARD_BY_LIST = `${prefix} Remove by list`;
export const TOGGLE_COMPLETED_CARD = `${prefix} Toggle completed`;

export class AddCard implements Action {
  readonly type = ADD_CARD;

  constructor(payload: ICard) {}
}

export class UpdateCard implements Action {
  readonly type = UPDATE_CARD;

  constructor(
    payload: {
      id: number,
      title?: string,
      description?: string
    }
  ) {}
}

export class RemoveCard implements Action {
  readonly type = REMOVE_CARD;

  constructor(payload: number) {}
}

export class RemoveCardByList implements Action {
  readonly type = REMOVE_CARD_BY_LIST;

  constructor(payload: number) {}
}

export class ToggleCompletedCard implements Action {
  readonly type = TOGGLE_COMPLETED_CARD;

  constructor(payload: number) {}
}

export type Action
  = AddCard
  | UpdateCard
  | RemoveCard
  | RemoveCardByList
  | ToggleCompletedCard;
