// tone.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToneInterface } from '../interfaces/tone';
import { ClockService } from '../services/clock';
import { ToneService } from '../services/tone';
import * as Tone from 'tone';

@Component({
  selector: 'app-tone',
  templateUrl: "tone.component.html",
  styleUrls:["tone.component.css"],
  providers:[ToneService]
})
export class ToneComponent implements OnInit {
  @Input() tone:ToneInterface = {duration:"8n",index:1,note:"C4",type:"sine",uid:"1"};
  @Output() toneChange:EventEmitter<ToneInterface> = new EventEmitter<ToneInterface>()
  durations = ['8n', '4n', '2n']; // Update durations to use Tone.js rhythmic values
  notes = ['C4','D4','E4','F4','G4','A4','B4','C5'] // Update notes to use scientific pitch notation
      types = ['sine', 'square', 'sawtooth', 'triangle'];
time = 0
  constructor(public clockservice:ClockService, private toneService: ToneService) { 

    this.clockservice.time.subscribe(t => {
this.time = t
      console.log("tick",t)

      if(this.tone.index==t){
        this.toneService.playTone(this.tone);
      }
    });

  }
  playTone() {
    this.toneService.playTone(this.tone);
  }
  ngOnInit(): void {
   
  }
}
