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

   GiveFeedback(message: string,feedbacktype:string):Observable<any>{
    let deviceId:string;
    deviceId = this.device.uuid;
    let feedback = new Feedback(message,deviceId,feedbacktype);

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.http.post<any>(this.baseUrl+"api/feedback/",feedback,httpOptions).pipe(data=>data);
   }
}
