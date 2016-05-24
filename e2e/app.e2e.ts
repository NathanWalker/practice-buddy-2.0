import { PracticeBuddyPage } from './app.po';

describe('practice-buddy App', function() {
  let page: PracticeBuddyPage;

  beforeEach(() => {
    page = new PracticeBuddyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('practice-buddy works!');
  });
});
