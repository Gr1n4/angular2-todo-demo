import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {IBoard, Board} from '../../models/board';
import * as fromRoot from '../../reducers';
import {getBoards} from '../../selectors/boards';
import * as actions from '../../actions/board';

@Component({
  selector: 'app-board-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('pug-loader!./board-list.component.pug')(),
  styleUrls: ['./board-list.component.sass']
})
export class BoardListComponent implements OnInit {
  boards$: Observable<IBoard[]>;
  createBoardForm: FormGroup;

  constructor(private store: Store<fromRoot.State>, private formBuilder: FormBuilder) {
    this.boards$ = this.store.select(getBoards);
    this.createBoardForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  removeBoardById(id: number) {
    this.store.dispatch(new actions.RemoveBoard(id));
  }

  addBoard(event, popover) {
    event.preventDefault();
    popover.close();
    const {title} = this.createBoardForm.value;
    this.store.dispatch(new actions.AddBoard(new Board(title)));
  }

}
