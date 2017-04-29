import * as board from '../actions/board';
import {IBoard} from '../models/board';

export interface State extends Array<IBoard> {}

export const initialState: State = [
  {
    id: 1,
    title: 'Board 1',
  }
];

export function reducer(state: State = initialState, action): State {

  switch (action.type) {
    case board.ADD_BOARD:
      return [
        ...state,
        action.payload
      ];
    case board.REMOVE_BOARD:
      return state.filter(item => item.id !== action.payload);
    case board.UPDATE_BOARD:
      return state.map(item => item.id === action.payload.id ? {...item, title: action.payload.title} : item);
    default:
      return state;
  }
}

export const getBoardFromReducer = (state: IBoard[]) => state;
export const getBoardById = (id: number) => {
  return (state: State) => state.filter(board => board.id === id)[0];
};
