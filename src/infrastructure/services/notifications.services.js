import PushNotificationIOS from '@react-native-community/push-notification-ios'
import PushNotification, { Importance } from 'react-native-push-notification'

class NotificationServices {
  constructor (token) {
    console.log(token, '---555')
    this.token = token
  }

  initForReceive (onNotification) {
    PushNotification?.removeAllDeliveredNotifications()

    PushNotification.configure({
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification)
        onNotification(notification)
        notification.finish(PushNotificationIOS.FetchResult.NoData)
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action)
        console.log('NOTIFICATION:', notification)
      },
      onRegistrationError: function (err) {
        console.error(err.message, err)
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      popInitialNotification: true,
      vibrate: true,
      visibility: 'public',
      playSound: true,
      importance: Importance.HIGH,
      requestPermissions: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_notification'
    })
  }

  configure (callback, onNotification) {
    PushNotification.requestPermissions()
    PushNotification?.removeAllDeliveredNotifications()
    PushNotification.configure({
      onRegister: function (token) {
        callback(token)
      },
      onNotification: function (notification) {
        onNotification(notification)
        notification.finish(PushNotificationIOS.FetchResult.NoData)
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action)
        console.log('NOTIFICATION:', notification)
      },
      onRegistrationError: function (err) {
        console.error(err.message, err)
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },
      popInitialNotification: true,
      vibrate: true,
      visibility: 'public',
      playSound: true,
      importance: Importance.HIGH,
      requestPermissions: true,
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_notification'
    })
  }
}

export default NotificationServices
