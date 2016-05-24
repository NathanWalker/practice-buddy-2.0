export class PracticeBuddyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('practice-buddy-app h1')).getText();
  }
}
