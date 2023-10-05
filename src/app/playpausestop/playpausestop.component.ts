import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ClockService } from '../services/clock';
@Component({
  selector: 'app-playpausestop',
  templateUrl: './playpausestop.component.html',
  styleUrls: ['./playpausestop.component.css']
})
export class PlaypausestopComponent {

  intervalId:any;

  constructor(public clockservice:ClockService) { }


  // ngOnInit(): void {
  //   this.time.subscribe(t => {
  //     console.log("tick",t)

     
  //   });
  // }
}

