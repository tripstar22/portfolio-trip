import { browser, by, element } from 'protractor';

export class PortfolioTripPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('trip-root h1')).getText();
  }
}
