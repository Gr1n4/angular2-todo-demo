import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';

import {State} from '../reducers';

import {getListsSelector, getListByBoardIdSelector} from '../selectors/list';

@Injectable()
export class ListService {

  constructor(
    private _store: Store<State>
  ) { }

  getLists() {
    return this._store.select(getListsSelector);
  }

  getListsByBoard(id) {
    return this._store.select(getListByBoardIdSelector(Number(id)));
  }

}