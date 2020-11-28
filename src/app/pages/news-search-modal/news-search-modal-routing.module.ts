import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsSearchModalPage } from './news-search-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewsSearchModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsSearchModalPageRoutingModule {}
