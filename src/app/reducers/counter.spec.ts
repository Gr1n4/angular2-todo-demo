import * as fromCounter from './counter';
import {IncrementCounter, DecrementCounter} from '../actions/counter';

describe('CounterReducer', () => {
  it('should return the initial state', () => {
    const result = {counter: 0};
    expect(result).toEqual(fromCounter.initialState);
  });

  it('should return increment value = 1', () => {
    const expected = {counter: 1}
        , action = new IncrementCounter()
        , actual = fromCounter.reducer(fromCounter.initialState, action);

    expect(actual).toEqual(expected);
  });

  it('should return decrement value = -1', () => {
    const expected = {counter: -1}
      , action = new DecrementCounter()
      , actual = fromCounter.reducer(fromCounter.initialState, action);

    expect(actual).toEqual(expected);
  });
});
