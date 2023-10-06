import { Component, Input } from '@angular/core';
import { Goto } from '../interfaces/tone';
import { ClockService } from '../services/clock';

@Component({
  selector: 'app-goto',
  templateUrl: './goto.component.html',
  styleUrls: ['./goto.component.css']
})
export class GotoComponent {
  @Input() goto:Goto = {index:1,gotoIndex:1,uid:"1"};
  subscription: any;
  constructor(public clockservice:ClockService) { 

    this.subscription = this.clockservice.time.subscribe(t => {
      console.log("tick",t)

      if(this.goto.index==t){
        this.clockservice._time =this.goto.gotoIndex

      }
    });

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
