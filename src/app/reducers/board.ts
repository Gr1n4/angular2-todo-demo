import * as board from '../actions/board';
import {IBoard} from '../models/board';

export interface State {
  [index: number]: IBoard;
}

export const initialState: State = [
  {
    id: 1,
    title: 'Board 1',
    description: 'Description for Board 1'
  }
];

export function reducer(state: State = initialState, action: board.Action): State {

  console.log('state from reducer', state);
  switch (action.type) {
    case board.ADD_BOARD:
      // return state.concat(action.payload);
      // return [
      //   ...state,
      //   action.payload
      // ];
    default:
      return state;
  }
}

export const getBoardFromReducer = (state: IBoard[]) => {
  return state;
};
