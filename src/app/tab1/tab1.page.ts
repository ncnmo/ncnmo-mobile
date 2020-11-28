import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ModalController, PopoverController} from '@ionic/angular';
import { NewsModalPage } from '../pages/news-modal/news-modal.page';
import { NewsSearchModalPage } from '../pages/news-search-modal/news-search-modal.page';
import { NewsInfoPopoverComponent } from '../components/news-info-popover/news-info-popover.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loading: any = true;
  news:any[];
  active:boolean;
  enabled:boolean;
  constructor(public popoverController: PopoverController,private newsService:NewsService, public modalController:ModalController){
  }

  ngOnInit(){
    //this.events.subscribe('news:add', this.addNews);
  }
  ionViewDidEnter() {
    setTimeout(() => {
    this.newsService.getNews().subscribe(data=>this.do(data));
  }, 100);
  }

  
 do(data){
   this.loading = false;
   this.news= data;
 }
 
  addNews(){
    //this.events.publish('news:viewed')
  }


  async showNewsModal(data){
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

  async showSearhModal(){
    try{
      const modal = await this.modalController.create({
        component:NewsSearchModalPage
      })
    return  await modal.present();
    }
    catch{
     
    }
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: NewsInfoPopoverComponent,
      event: ev,
      translucent: true,
      animated:true,
      backdropDismiss:true,
      showBackdrop:true
    });
    return await popover.present();
  }

}
