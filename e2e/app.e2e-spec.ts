import { BlogAppPage } from './app.po';

describe('blog-app App', () => {
  let page: BlogAppPage;

  beforeEach(() => {
    page = new BlogAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
