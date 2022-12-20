import { Notification } from './Notifications';
import { Content } from './content';

describe('Notication', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Aqui tem muita gente!'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
