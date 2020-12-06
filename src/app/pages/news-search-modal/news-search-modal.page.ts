import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { NewsService } from 'src/app/services/news.service';
import { debounceTime } from "rxjs/operators";
import { NewsModalPage } from '../news-modal/news-modal.page';

@Component({
  selector: 'app-news-search-modal',
  templateUrl: './news-search-modal.page.html',
  styleUrls: ['./news-search-modal.page.scss'],
})
export class NewsSearchModalPage implements OnInit {

  public searchControl: FormControl;
  searching: any = false;
  public searchTerm: string = "";
  public news: any;
  constructor(private modalController:ModalController,private newsService:NewsService) { 
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.setFilteredItems("");

    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.setFilteredItems(search);
      });
  }

  async close(){
    await this.modalController.dismiss();
  }
  setFilteredItems(searchTerm) {
    this.news = this.newsService.filterItems(searchTerm);
  }

  async showModal(data){
    try{
      const modal = await this.modalController.create({
        component:NewsModalPage,
        componentProps:{
          data:data
        }
      })
    return  await modal.present();
    }
    catch{
    }
  }

}
