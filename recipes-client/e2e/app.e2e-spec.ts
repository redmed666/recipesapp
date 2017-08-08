import { RecettesappPage } from './app.po';

describe('recettesapp App', () => {
  let page: RecettesappPage;

  beforeEach(() => {
    page = new RecettesappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
