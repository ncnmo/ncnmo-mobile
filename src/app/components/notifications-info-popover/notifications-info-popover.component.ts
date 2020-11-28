import { Component, OnInit } from '@angular/core';
import { PopoverController} from '@ionic/angular';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-notifications-info-popover',
  templateUrl: './notifications-info-popover.component.html',
  styleUrls: ['./notifications-info-popover.component.scss'],
})
export class NotificationsInfoPopoverComponent implements OnInit {

 
  feedback:boolean = false;
  message:string;
  constructor(public popoverController: PopoverController, public feedbackService:FeedbackService) {
    this.message = "";
   }

  ngOnInit() {}
  save(){
    this.feedbackService.GiveFeedback(this.message,"notificationsfeedback" ).subscribe(data=>this.feedback = true);
   }
   close(){
     this.popoverController.dismiss();
   }


}
