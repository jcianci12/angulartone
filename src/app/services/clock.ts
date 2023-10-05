import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  public _time = 0;
  public time = new BehaviorSubject<number>(this._time);
  intervalId:any
  start() {
    this.intervalId = setInterval(() => {
      this. _time=this._time+1
      this.time.next(this._time);
    }, 100);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    clearInterval(this.intervalId);
    this._time =0
    this.time.next(this._time)
    
  }
}

