import { Content } from '../entities/content';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'This is a notification',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
