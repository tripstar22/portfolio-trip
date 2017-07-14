import { PortfolioTripPage } from './app.po';

describe('portfolio-trip App', () => {
  let page: PortfolioTripPage;

  beforeEach(() => {
    page = new PortfolioTripPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to trip!');
  });
});
