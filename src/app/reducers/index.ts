import {createSelector} from 'reselect';
import {ActionReducer, combineReducers} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {compose} from '@ngrx/core/compose';
import {storeFreeze} from 'ngrx-store-freeze';

import * as fromCounter from './counter';
import * as fromBoard from './board';
import * as fromList from './list';

export interface State { // TODO: Need rename to RootState!!!
  counter: fromCounter.State; // State store from reducers/counter.ts
  board: fromBoard.State;
  list: fromList.State;
  router: fromRouter.RouterState;
}

const reducers = {
  counter: fromCounter.reducer,
  board: fromBoard.reducer,
  list: fromList.reducer,
  router: fromRouter.routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getCounter = (state: State) => {
  return state.counter;
};

export const getCurrentCounter = createSelector(getCounter, fromCounter.getCurrentCounter);
