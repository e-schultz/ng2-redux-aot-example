import { WhyNoTestPage } from './app.po';

describe('why-no-test App', function() {
  let page: WhyNoTestPage;

  beforeEach(() => {
    page = new WhyNoTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
