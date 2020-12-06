import { Injectable } from '@angular/core';
import {Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed, Capacitor} from '@capacitor/core';
import { LocalDatabaseService  } from '../services/local-database.service';
import { DeviceTokenService } from '../services/device-token.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewsNotificationModalPage } from '../pages/news-notification-modal/news-notification-modal.page';
const { PushNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FirebaseCloudMessagingService {

  constructor(public modalController:ModalController, private router: Router, private localDatabaseService: LocalDatabaseService, private deviceTokenService: DeviceTokenService) { }
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
        let date =  Date();
        this.localDatabaseService.addNotification(+notification.data.id,notification.data.title, notification.data.body,notification.data.image,notification.data.postType,date);
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
        let date =  Date();
        this.localDatabaseService.addNotification(+notification.notification.data.id,notification.notification.data.title,notification.notification.data.body,notification.notification.data.image,notification.notification.data.postType,date);
        let theData = {
          notificationId: +notification.notification.data.id,
          title:notification.notification.data.title,
          body:notification.notification.data.body,
          image:notification.notification.data.image,
          postType:notification.notification.data.postType,
          date:date
        }

        this.showModal(theData);
      }
    );
  }

  async showModal(notification){
    const modal = await this.modalController.create({
      component:NewsNotificationModalPage,
      componentProps:{
        notification:notification
      }
    })
    await modal.present();  
  }
}
