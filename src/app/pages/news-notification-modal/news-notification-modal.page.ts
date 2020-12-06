import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-notification-modal',
  templateUrl: './news-notification-modal.page.html',
  styleUrls: ['./news-notification-modal.page.scss'],
})
export class NewsNotificationModalPage implements OnInit {

  @Input() notification:any;

  constructor(private modalController:ModalController,private newsService:NewsService, private router: Router) { 
  }

  ngOnInit() {
   
  }
  async close(){
    await this.modalController.dismiss();
    this.router.navigate(["tabs/tab2"]);
  }
}
