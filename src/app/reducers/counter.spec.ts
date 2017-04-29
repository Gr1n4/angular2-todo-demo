import * as fromCounter from './counter';
import {IncrementCounter, DecrementCounter} from '../actions/counter';

describe('CounterReducer', () => {
  function fiveIterator(state: {counter: number}, action, iterator?: number) {
    for (let i = 0; i < iterator || 5; i++) {
      if (i === 4) {
        return fromCounter.reducer(state, action);
      }
      fromCounter.reducer(state, action);
    }
  }

  describe('Increment', () => {
    it('should return the initial state', () => {
      const result = {counter: 0};
      expect(result).toEqual(fromCounter.initialState);
    });

    it('should return counter = 1', () => {
      const state = {counter: 0}
          , expectedOne = {counter: 1}
          , expectedFive = {counter: 5}
          , action = new IncrementCounter()
          , actualOneIncrement = fromCounter.reducer(state, action);

      expect(actualOneIncrement).toEqual(expectedOne);
      // expect(fiveIterator(state, action)).toEqual(expectedFive);
    });
  });

  describe('Decrement', () => {

  });
});
