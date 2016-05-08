import { CokePage } from './app.po';

describe('coke App', function() {
  let page: CokePage;

  beforeEach(() => {
    page = new CokePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('coke works!');
  });
});
