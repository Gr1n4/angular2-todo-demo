import * as counter from '../actions/counter';

export interface State {
  counter: number;
}

const initialState: State = {
  counter: 0
};

export function reducer(state: State = initialState, action: counter.Action) {
  switch (action.type) {
    case counter.INCREMENT_COUNTER:
      return {counter: state.counter + 1};
    case counter.DECREMENT_COUNTER:
      return {counter: state.counter - 1};
    default:
      return state;
  }
}

export const getCurrentCounter = (state: State) => {
  console.log('get counter in reducer', state);
  return state.counter;
};
