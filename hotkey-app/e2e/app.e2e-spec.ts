import { HotkeyAppPage } from './app.po';

describe('hotkey-app App', () => {
  let page: HotkeyAppPage;

  beforeEach(() => {
    page = new HotkeyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
