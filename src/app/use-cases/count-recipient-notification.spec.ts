import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { Notification } from '@app/entities/notifications';
import { Content } from '@app/entities/content';
import { CountRecipientNotification } from './count-recipient-notification';

describe('Count notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        content: new Content('Um novo conteúdo'),
        category: 'news',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        content: new Content('uma nova mensagem'),
        category: 'social',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-2',
        content: new Content('uma nova mensagem'),
        category: 'social',
      }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
