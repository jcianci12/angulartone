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

  start() {
    this.intervalId = setInterval(() => {
      this.clockservice. _time=this.clockservice._time+1
      this.clockservice.time.next(this.clockservice._time);
    }, 100);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    clearInterval(this.intervalId);
    this.clockservice.time.next(0);
  }
  // ngOnInit(): void {
  //   this.time.subscribe(t => {
  //     console.log("tick",t)

     
  //   });
  // }
}

