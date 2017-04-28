import { TodoDemoPage } from './app.po';

describe('todo-demo App', () => {
  let page: TodoDemoPage;

  beforeEach(() => {
    page = new TodoDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
