import * as list from '../actions/list';
import {IList} from '../models/list';

export interface State extends Array<IList> {}

export const initialState: State = [
  {
    id: 1,
    title: 'List 1',
    boardId: 1
  },
  {
    id: 2,
    title: 'List 2',
    boardId: 1
  },
  {
    id: 3,
    title: 'List 3',
    boardId: 2
  }
];

export function reducer(state: State = initialState, {type, payload}): State {
  switch (type) {
    case list.ADD_LIST:
      return [
        ...state,
        payload
      ];
    case list.REMOVE_LIST:
      return state.filter(item => item.id !== payload);
    case list.UPDATE_LIST:
      return state.map(item => item.id === payload.id ? {...item, title: payload.title} : item);
    default:
      return state;
  }
}

export const getLists = (state: State) => state;
export const getListByBoardId = (id: number) => {
  return (state: State) => state.filter(list => list.boardId === id);
};
