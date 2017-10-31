import { MimeoOAFrontendPage } from './app.po';

describe('mimeo-oa-frontend App', () => {
  let page: MimeoOAFrontendPage;

  beforeEach(() => {
    page = new MimeoOAFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
