import {ICard} from '../models/card';
import * as cardActions from '../actions/card';

export interface State extends Array<ICard> {}

export const initialState: State = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Description for card 1',
    completed: false,
    listId: 1
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Description for card 2',
    completed: false,
    listId: 1
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Description for card 3',
    completed: false,
    listId: 2
  }
];

export function reducer(state: State = initialState, {type, payload}): State {
  switch (type) {
    case cardActions.ADD_CARD:
      return [
        ...state,
        payload
      ];
    case cardActions.UPDATE_CARD:
      return state.map(card => card.id === payload.id ? Object.assign({}, card, payload) : card);
    case cardActions.REMOVE_CARD:
      return state.filter(card => card.id !== payload);
    case cardActions.REMOVE_CARD_BY_LIST:
      return state.filter(card => card.listId !== payload);
    case cardActions.TOGGLE_COMPLETED_CARD:
      return state.map(card => card.id === payload ? {...card, completed: !card.completed} : card);
    default:
      return state;
  }
}

export const getCards = (state: State) => state;
// export const getCardsByListId = (listId: number) => (state: State) => state.filter(card => card.listId === listId);
export const getCardsByListId = (listId: number) => {
  console.log('lsit id ', listId);
  return (state: State) => {
    return state.filter(card => {
      return card.listId === listId;
    });
  };
};
