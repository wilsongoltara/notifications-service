import { Notification } from '@app/entities/notifications';
import { NotificationsRepository } from '@app/repositories/notifications-respository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
