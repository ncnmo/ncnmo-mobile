import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.page.html',
  styleUrls: ['./news-modal.page.scss'],
})
export class NewsModalPage implements OnInit {

  @Input() data:any;
 
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalController.dismiss();
  }
}
