import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationSearchModalPage } from './notification-search-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationSearchModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationSearchModalPageRoutingModule {}
