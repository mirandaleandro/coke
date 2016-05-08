export class CokePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('coke-app h1')).getText();
  }
}
