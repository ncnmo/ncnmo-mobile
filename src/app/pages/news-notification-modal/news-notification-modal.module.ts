import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsNotificationModalPageRoutingModule } from './news-notification-modal-routing.module';

import { NewsNotificationModalPage } from './news-notification-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsNotificationModalPageRoutingModule
  ],
  declarations: [NewsNotificationModalPage]
})
export class NewsNotificationModalPageModule {}
