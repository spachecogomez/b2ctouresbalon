import { B2ctouresbalonPage } from './app.po';

describe('b2ctouresbalon App', () => {
  let page: B2ctouresbalonPage;

  beforeEach(() => {
    page = new B2ctouresbalonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
