import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  public _time = 0;
  public time = new Subject<number>();
  public tempoSubject = new BehaviorSubject<number>(100); // Default tempo is 100ms
  intervalId:any

  constructor(){
    this.time.next(0)
  }

  start() {
    this.intervalId = setInterval(() => {
      this._time=this._time+1
      this.time.next(this._time);
    }, this.tempoSubject.getValue()); // Use the getValue method here
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    clearInterval(this.intervalId);
    this._time =0
    this.time.next(this._time)
    
  }

  // setTempo(newTempo: number) {
  //   this.tempoSubject.next(newTempo); // Use the next method here
  //   if (this.intervalId) {
  //     // If the clock is running, restart it with the new tempo
  //     this.stop();
  //     this.start();
  //   }
  // }
}
