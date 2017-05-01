import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';

import * as rootReducer from '../reducers';
import * as cardActions from '../actions/card';
import {Card} from '../models/card';
import {getCardsSelector, getCardsByListSelector} from '../selectors/cards';

@Injectable()
export class CardService {

  constructor(
    private _store: Store<rootReducer.State>
  ) { }

  getCards() {
    return this._store.select(getCardsSelector);
  }

  getCardsByListId(listId: number) {
    return this._store.select(getCardsByListSelector(listId));
  }

  createCard(title: string, listId: number) {
    return this._store.dispatch(new cardActions.AddCard(new Card({title, listId})));
  }
}
