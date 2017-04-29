import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {IList, List} from '../../models/list';
import {IBoard} from '../../models/board';

import * as fromRoot from '../../reducers';
import {getListsSelector, getListByBoardIdSelector} from '../../selectors/list';
import {getBoardByIdSelector} from '../../selectors/boards';

import * as actionsList from '../../actions/list';
import * as actionsBoard from '../../actions/board';

@Component({
  selector: 'app-board',
  template: require('pug-loader!./board.component.pug')(),
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  board$: Observable<IBoard>;
  lists$: Observable<IList[]>;
  list$: Observable<IList[]>;

  constructor(private store: Store<fromRoot.State>) {
    this.lists$ = this.store.select(getListsSelector);
    this.list$ = this.store.select(getListByBoardIdSelector(1));
    this.board$ = this.store.select(getBoardByIdSelector(1));
  }

  ngOnInit() {
  }

}
