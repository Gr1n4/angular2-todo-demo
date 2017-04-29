import {createSelector} from 'reselect';
import {State} from '../reducers';
import {getLists, getListByBoardId} from '../reducers/list';

export const getListState = (state: State) => state.list;

export const getListsSelector = createSelector(getListState, getLists);
export const getListByBoardIdSelector = (id: number) => createSelector(getListState, getListByBoardId(id));
