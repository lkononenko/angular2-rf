import { Angular2RfPage } from './app.po';

describe('angular2-rf App', function() {
  let page: Angular2RfPage;

  beforeEach(() => {
    page = new Angular2RfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
