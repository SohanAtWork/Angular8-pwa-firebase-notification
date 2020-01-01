import { Component, OnInit } from '@angular/core';
import { MessagingService } from "../shared/messaging.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message;
  deviceid:string;
  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    const userId = 'sohan';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  }
  sendPushNotification()
    {
      this.messagingService.sendPushMessage("Hi, Sohan", "This is Firebase test messsage",this.deviceid);
      this.messagingService.receiveMessage()
      this.message = this.messagingService.currentMessage
    }
}
