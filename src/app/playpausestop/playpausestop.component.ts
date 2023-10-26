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
tempo:number = 100
  constructor(public clockservice:ClockService) { }


  ngOnInit(): void {
    
  }
  updateTempo(newTempo: number) {
    this.clockservice.tempoSubject.next(newTempo);
    if (this.clockservice.intervalId) {
      // If the clock is running, restart it with the new tempo
      this.clockservice.stop();
      this.clockservice.start();
    }
  }
  
}

