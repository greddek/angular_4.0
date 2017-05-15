import { HelloApp2Page } from './app.po';

describe('hello-app2 App', () => {
  let page: HelloApp2Page;

  beforeEach(() => {
    page = new HelloApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
