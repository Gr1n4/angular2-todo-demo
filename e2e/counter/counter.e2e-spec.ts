import {CounterComponent} from './counter.po';

describe('Counter', () => {
  let counterPo: CounterComponent;

  beforeEach(() => {
    counterPo = new CounterComponent();
  });

  it('should display initial state counter equal 0', () => {
    counterPo.navigateTo();
    expect(counterPo.getCounterContent()).toEqual(counterPo.initialValue);
  });
});
