import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsSearchModalPageRoutingModule } from './news-search-modal-routing.module';

import { NewsSearchModalPage } from './news-search-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsSearchModalPageRoutingModule
  ],
  declarations: [NewsSearchModalPage]
})
export class NewsSearchModalPageModule {}
