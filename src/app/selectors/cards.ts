import {createSelector} from 'reselect';

import {State} from '../reducers';
import {getCards, getCardsByListId} from '../reducers/card';

export const getCardState = (state: State) => state.card;

export const getCardsSelector = createSelector(getCardState, getCards);
export const getCardsByListSelector = (listId: number) => createSelector(getCardState, getCardsByListId(listId));
