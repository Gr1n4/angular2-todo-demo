import {Action} from '@ngrx/store';

export const INCREMENT_COUNTER = '[Counter] Increment';
export const DECREMENT_COUNTER = '[Counter] Decrement';

export class IncrementCounter implements Action {
  readonly type = INCREMENT_COUNTER;
}

export class DecrementCounter implements Action {
  readonly type = DECREMENT_COUNTER;
}

export type Action
  = IncrementCounter
  | DecrementCounter;
