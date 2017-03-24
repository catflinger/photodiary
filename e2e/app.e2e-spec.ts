import { PhotodiaryPage } from './app.po';

describe('photodiary App', () => {
  let page: PhotodiaryPage;

  beforeEach(() => {
    page = new PhotodiaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
