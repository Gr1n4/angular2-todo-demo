import {element, by, browser} from 'protractor';

export class CounterComponent {
  initialValue: number = 0;

  navigateTo() {
    return browser.get('/');
  }

  getCounterContent() {
    return element(by.css('app-counter h1.counter-output'));
  }
}
