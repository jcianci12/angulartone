// tone.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToneInterface } from '../interfaces/tone';
import { ClockService } from '../services/clock';
import { ToneService } from '../services/tone';
import * as Tone from 'tone';
import { AppComponent } from '../app.component';
import { ToneManager } from '../services/TonePlayer';

@Component({
  selector: 'app-tone',
  templateUrl: "tone.component.html",
  styleUrls:["tone.component.css"],
  providers:[ToneService]
})
export class ToneComponent implements OnInit {
  @Input() tone!:ToneInterface;
  durations = ['8n', '4n', '2n']; // Update durations to use Tone.js rhythmic values
  notes = this.generatePianoKeys()
      types = ['sine', 'square', 'sawtooth', 'triangle'];
time = 0
  subscription: any;
  constructor(public clockservice:ClockService,public toneservice:ToneService) { 

    this.subscription = this.clockservice.time.subscribe(t => {
this.time = t
      console.log("tick",t)

      if(this.tone?.index==t){
        this.toneservice.playTone(this.tone);
      }
    });

  }
  playTone() {
    this.toneservice.playTone(this.tone);
  }
  ngOnInit(): void {
   
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  generatePianoKeys() {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    let pianoKeys = [];
  
    for (let i = 0; i < 8; i++) {
      for (let note of notes) {
        pianoKeys.push(note + i);
      }
    }
  
    // Add the last C note
    pianoKeys.push('C8');
  
    return pianoKeys;
  }
}
