import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'news-modal',
    loadChildren: () => import('./pages/news-modal/news-modal.module').then( m => m.NewsModalPageModule)
  },
  {
    path: 'news-notification-modal',
    loadChildren: () => import('./pages/news-notification-modal/news-notification-modal.module').then( m => m.NewsNotificationModalPageModule)
  },
  {
    path: 'notification-search-modal',
    loadChildren: () => import('./pages/notification-search-modal/notification-search-modal.module').then( m => m.NotificationSearchModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
