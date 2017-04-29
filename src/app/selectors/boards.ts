import {createSelector} from 'reselect';
import {State} from '../reducers';
import {getBoardFromReducer} from '../reducers/board';

export const getBoardsByStore = (state: State) => {
  return state.board;
};
export const getBoards = createSelector(getBoardsByStore, getBoardFromReducer);
