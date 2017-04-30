import { Component, OnInit, ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

import {IList, List} from '../../models/list';
import {IBoard} from '../../models/board';

import * as fromRoot from '../../reducers';
import {getListsSelector, getListByBoardIdSelector} from '../../selectors/list';
import {getBoardByIdSelector} from '../../selectors/boards';

import * as actionsBoard from '../../actions/board';

import {BoardService} from '../../services/board.service';

@Component({
  selector: 'app-board',
  template: require('pug-loader!./board.component.pug')(),
  styleUrls: ['./board.component.sass'],
})
export class BoardComponent implements OnInit {
  board$: Observable<IBoard>;
  board: IBoard;
  toggleBoardTitle = false;
  formBoardTitle: FormGroup;

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private boardService: BoardService
  ) {
    this.formBoardTitle = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params
      .subscribe(param => {
        this.board$ = this.store.select(getBoardByIdSelector(Number(param.id)));
        this.board$.subscribe(board => {
          this.board = board;
          return board;
        });
        return param;
      });
  }

  editBoardTitle() {
    this.formBoardTitle.patchValue({
      title: this.board.title
    });
    this.toggleBoardTitle = true;
  }

  viewBoardTitle(e) {
    if (e.keyCode === 27) {
      this.toggleBoardTitle = false;
    }
  }

  changeTitle(e) {
    e.preventDefault();
    const title = this.formBoardTitle.value.title;
    this.store.dispatch(new actionsBoard.UpdateBoard({id: this.board.id, title: title}));
    this.toggleBoardTitle = false;
  }

}
