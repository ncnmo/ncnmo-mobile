import { Injectable } from '@angular/core';
import {Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed, Capacitor} from '@capacitor/core';
import { LocalDatabaseService  } from '../services/local-database.service';
import { DeviceTokenService } from '../services/device-token.service';
import { Router } from '@angular/router';
const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudMessagingService {

  constructor(private router: Router, private localDatabaseService: LocalDatabaseService, private deviceTokenService: DeviceTokenService) { }
  initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }

  private registerPush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });
 
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        this.deviceTokenService.saveToken(token).subscribe(data=>console.log(data));
      }
    );
 
    PushNotifications.addListener('registrationError', (error: any) => {
    });
 
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));
        let date =  Date();
        this.localDatabaseService.addNotification(+notification.id,notification.title,notification.body,notification.data.image,notification.data.postType,date);
        //if(notification.data.postType === "event"){
          //this.events.publish('events:created');
        //}
        //else if(notification.data.postType === "news"){
          //this.events.publish('news:created');
        //}
       // this.events.publish('notifications:created');
      })
 
 
 
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        if (data.detailsId) {
          this.router.navigateByUrl('')
        }
      }
    );
  }
}
