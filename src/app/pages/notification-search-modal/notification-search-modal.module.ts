import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationSearchModalPageRoutingModule } from './notification-search-modal-routing.module';

import { NotificationSearchModalPage } from './notification-search-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationSearchModalPageRoutingModule
  ],
  declarations: [NotificationSearchModalPage]
})
export class NotificationSearchModalPageModule {}
