import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.page.html',
  styleUrls: ['./news-modal.page.scss'],
})
export class NewsModalPage implements OnInit {

  @Input() data:any;
 
  constructor(private modalController:ModalController,private newsService:NewsService) { }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }
}
