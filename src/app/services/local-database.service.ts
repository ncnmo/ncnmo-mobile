import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class LocalDatabaseService {
  private database:SQLiteObject;
  private databaseReady:BehaviorSubject<boolean> = new BehaviorSubject(false);
  notifications = new BehaviorSubject([]);
 
  constructor(private platform:Platform, private sqlite:SQLite, private http:HttpClient) {
   
    this.platform.ready().then(()=>{
     this.initializeDatabase();
    })  
  }

  initializeDatabase(){
    this.sqlite.create({
      name:'ncnmoDatabase.db',
      location:'default'
    })
    .then((db:SQLiteObject)=>{
      
      this.database = db;
      this.database.executeSql('CREATE TABLE IF NOT EXISTS notification (id INTEGER PRIMARY KEY AUTOINCREMENT, notificationId INTEGER,title TEXT,body TEXT, image TEXT,postType TEXT,date TEXT)',[]).then(d=>console.log());
      this.databaseReady.next(true);
    })
  }
  getDatabaseState(){
    return this.databaseReady.asObservable();
  }

  getNotifications():Observable<any>{
    this.loadNotifications();
    return this.notifications.asObservable();
  }

  deleteNotification(id:number){
    return this.database.executeSql('DELETE FROM notification WHERE id = ?',[id]).then(data=>{
      this.loadNotifications();
    });
  }

  addNotification(notificationId, title,body,image,postType,date){
    let data = [notificationId,title,body,image.trim(),postType,date];
    return this.database.executeSql('INSERT INTO notification (notificationId, title, body, image, postType,date) VALUES (?, ?, ?, ?, ?, ?)',data).then(data=>{
      this.loadNotifications();
    });
  }

  loadNotifications(){
    return this.database.executeSql('SELECT * FROM notification',[]).then(data=>{
      let notifications = [];

      if(data.rows.length > 0){
        for(var counter = 0; counter < data.rows.length; counter++){
          notifications.push({
            id:data.rows.item(counter).id,
            notificationId:data.rows.item(counter).notificationId,
            title:data.rows.item(counter).title,
            body:data.rows.item(counter).body,
            image:data.rows.item(counter).image,
            postType:data.rows.item(counter).postType,
            date:moment.utc(data.rows.item(counter).date).fromNow()
          })
        }
      }
      this.notifications.next(notifications);
    });
  }
}
