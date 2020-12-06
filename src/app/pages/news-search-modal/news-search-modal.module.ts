import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSearchModalPageRoutingModule } from './news-search-modal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSearchModalPageRoutingModule
  ]
})
export class NewsSearchModalPageModule {}
