import { Notification } from '../../src/app/entities/notifications';
import { NotificationsRepository } from '../../src/app/repositories/notifications-respository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
