import { Component, OnInit } from '@angular/core';
import { state, trigger, animate, style, transition} from '@angular/animations';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({opacity: 0, bottom:'0px', })),
      state('visible', style({opacity: 1, bottom:'30px'})),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('50ms 0s ease-out'))
    ])  
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = "Hello there!"
  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifier.do(message => {
      this.message = message
      this.snackVisibility = 'visible'
    }).switchMap(message => Observable.timer(3000))
      .subscribe(timer => this.snackVisibility = 'hidden')
  }

}
