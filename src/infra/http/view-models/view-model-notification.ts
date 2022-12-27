import { Notification } from '@app/entities/notifications';

export class ViewModelNotification {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
