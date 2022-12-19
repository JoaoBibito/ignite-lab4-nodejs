import { Content } from './content';

describe('Notification content', () => {
  it('Should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('Should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('123')).toThrow();
  });

  it('Should not be able to create a notification content with more than 5 characters', () => {
    expect(() => new Content('3'.repeat(241))).toThrow();
  });
});
