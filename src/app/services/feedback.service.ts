import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Feedback } from '../models/classes';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  public events: any = [];
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,private device:Device) {
   
   }

   GiveFeedback(message: string,feedbackFor:string):Observable<any>{

    let feedback = new Feedback(message, this.device.uuid, feedbackFor);

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.http.post<any>(this.baseUrl+"api/feedback/",JSON.stringify(feedback),httpOptions).pipe(data=>data);
   }
}
