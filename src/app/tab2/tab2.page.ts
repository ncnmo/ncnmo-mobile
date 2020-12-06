import { Component } from '@angular/core';
import { ModalController,ActionSheetController,PopoverController } from '@ionic/angular';
import { LocalDatabaseService } from '../services/local-database.service';
import { NotificationSearchModalPage } from '../pages/notification-search-modal/notification-search-modal.page'
import { NewsNotificationModalPage } from '../pages/news-notification-modal/news-notification-modal.page';
import { NotificationsInfoPopoverComponent } from '../../app/components/notifications-info-popover/notifications-info-popover.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  loading: any = true;
  items:string[] = [];
  notifications =[];
  constructor(private router: Router,public actionSheetController: ActionSheetController,public popoverController: PopoverController,private database:LocalDatabaseService, public modalController:ModalController){
  }

  ngOnInit(){
    //this.events.subscribe('notifications:add', this.addNewNotification);
  }
  ionViewDidEnter() {
 
    this.database.getDatabaseState().subscribe(ready=>{
     if(ready){

      setTimeout(() => {
        this.database.getNotifications().subscribe(notifications=>{
          this.notifications = notifications;
        })
      }, 1000);    

        this.loading = false;
      }
    })
   
  }

  addNewNotification(){
    //this.events.publish('notifications:viewed')
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

  async presentActionSheet(id) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.database.deleteNotification(id).then(data=>console.log(data));
        }
      },  {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: NotificationsInfoPopoverComponent,
      event: ev,
      translucent: true,
      animated:true,
      backdropDismiss:true,
      showBackdrop:true
    });
    return await popover.present();
  }

  async showSearhModal(){
    try{
      const modal = await this.modalController.create({
        component:NotificationSearchModalPage
      })
    return  await modal.present();
    }
    catch{
    }
  }
}
