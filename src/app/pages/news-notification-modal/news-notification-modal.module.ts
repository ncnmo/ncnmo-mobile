import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsNotificationModalPageRoutingModule } from './news-notification-modal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsNotificationModalPageRoutingModule
  ]
})
export class NewsNotificationModalPageModule {}
