import { BeersPage } from './app.po';

describe('beers App', () => {
  let page: BeersPage;

  beforeEach(() => {
    page = new BeersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
