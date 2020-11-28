import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Device } from '@ionic-native/device/ngx';
import { NewsSearchModalPage  } from './pages/news-search-modal/news-search-modal.page';
import { NewsInfoPopoverComponent } from './components/news-info-popover/news-info-popover.component';
import { NotificationsInfoPopoverComponent } from './components/notifications-info-popover/notifications-info-popover.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent,NewsSearchModalPage, NewsInfoPopoverComponent,NotificationsInfoPopoverComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Device,
    SQLite,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
