import * as fromCounter from './counter';
import {IncrementCounter, DecrementCounter} from '../actions/counter';

describe('CounterReducer', () => {
  describe('Increment', () => {
    it('should return the initial state', () => {
      const result = {counter: 0};
      expect(result).toEqual(fromCounter.initialState);
    });
  });

  describe('Decrement', () => {

  });
});
