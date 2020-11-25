import { Injectable } from '@angular/core';
import {Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed, Capacitor} from '@capacitor/core';

const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudMessagingService {

  constructor() { }
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
        console.log('My token: ' + JSON.stringify(token));
       // this.deviceTokenService.saveToken(token).subscribe(data=>console.log(data));
      }
    );
 
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });
 
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        console.log('Push received: ' + JSON.stringify(notification));

            /*const toast = this.toastCtrl.create({
              message:notification.body,
              duration:3000,
              position:"middle"
            })
  
            toast.then(d=>d.present);   
            let date =  Date();
          //  this.databaseService.addNotification(+msg.id,msg.aps.alert.title,msg.aps.alert.body,msg.image,msg.postType,date);
            if(notification.data.postType === "event"){
              //this.events.publish('events:created');
            }
            else if(notification.data.postType === "news"){
              //this.events.publish('news:created');
            }*/
           // this.events.publish('notifications:created');
      })
 
 
 
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        if (data.detailsId) {
          
        }
      }
    );
  }
}
