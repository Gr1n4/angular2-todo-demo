import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import 'rxjs/add/operator/let';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as counter from '../../actions/counter';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('pug-loader!./counter.component.pug')(),
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store<fromRoot.State>) {
    this.counter$ = this.store.select(fromRoot.getCurrentCounter);
  }

  ngOnInit() {
  }

  increment() {
    this.store.dispatch(new counter.IncrementCounter());
  }

  decrement() {
    this.store.dispatch(new counter.DecrementCounter());
  }

}
