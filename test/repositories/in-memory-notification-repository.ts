import { Notification } from '@app/entities/notifications';
import { NotificationsRepository } from '@app/repositories/notifications-respository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
