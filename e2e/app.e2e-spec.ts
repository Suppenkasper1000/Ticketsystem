import { TicketsystemPage } from './app.po';

describe('ticketsystem App', () => {
  let page: TicketsystemPage;

  beforeEach(() => {
    page = new TicketsystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
