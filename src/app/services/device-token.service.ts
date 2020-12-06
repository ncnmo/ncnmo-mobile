import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { DeviceToken } from '../models/classes';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceTokenService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient, private device: Device) { 
  }

  public saveToken(token:any):Observable<any>{
  
    let deviceToken = new DeviceToken(this.device.uuid,token.value, this.device.platform);
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.http.post(this.baseUrl+'api/device',JSON.stringify(deviceToken), httpOptions);
  }
}
