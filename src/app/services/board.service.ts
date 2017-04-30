import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';

import {State} from '../reducers';

import {getListsSelector, getListByBoardIdSelector} from '../selectors/list';

@Injectable()
export class BoardService {

  constructor(
    private store: Store<State>
  ) { }

  getListByBoard(id) {
    return this.store.select(getListByBoardIdSelector(Number(id)));
  }

}
