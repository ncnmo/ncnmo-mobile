import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PopoverController} from '@ionic/angular';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-notifications-info-popover',
  templateUrl: './notifications-info-popover.component.html',
  styleUrls: ['./notifications-info-popover.component.scss'],
})
export class NotificationsInfoPopoverComponent implements OnInit {

 
  isFeedback:boolean = false;
  message:string;
  feedbackForm = new FormGroup({
    message: new FormControl('', Validators.required)
  });
  constructor(public popoverController: PopoverController, public feedbackService:FeedbackService) {
    this.message = "";
   }

  ngOnInit() {}
  submitFeedback(){
    if(this.feedbackForm.invalid){
      return;
    }
    this.message = this.feedbackForm.value.message;
    this.feedbackService.GiveFeedback(this.message,"notification").subscribe(data=>this.isFeedback = true);
   }
   close(){
     this.popoverController.dismiss();
   }


}
