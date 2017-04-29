import {createSelector} from 'reselect';
import {State} from '../reducers';
import {getBoardFromReducer, getBoardById} from '../reducers/board';

export const getBoardsByStore = (state: State) => state.board;

export const getBoards = createSelector(getBoardsByStore, getBoardFromReducer);
export const getBoardByIdSelector = (id: number) => createSelector(getBoardsByStore, getBoardById(id));
