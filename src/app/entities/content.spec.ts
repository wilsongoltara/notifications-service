import { Content } from './content';

describe('Notication content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Aqui tem muita gente!');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrowError('Content length error');
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('aaa'.repeat(241))).toThrowError(
      'Content length error',
    );
  });
});
