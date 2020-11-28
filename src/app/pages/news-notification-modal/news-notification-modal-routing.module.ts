import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsNotificationModalPage } from './news-notification-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewsNotificationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsNotificationModalPageRoutingModule {}
