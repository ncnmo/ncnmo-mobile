import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Device } from '@ionic-native/device/ngx';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl = environment.baseUrl;
  public news: any = [];
  constructor(private http:HttpClient, private device: Device) {
    setTimeout(() => {
      this.getNews().subscribe(data=>this.news = data);
    }, 100);
   
  }

  getNews(){
    let deviceId = this.device.uuid;
   return this.http.get<any[]>(this.baseUrl+"api/news/devicenews/"+ deviceId);
  }

  getNewById(newsId:Number):Promise<any>{
     return this.http.get<any>(this.baseUrl+"api/newsdetails/"+newsId).toPromise();
  }


  filterItems(searchTerm) {
    return this.news.filter(chapter => {
      return chapter.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
