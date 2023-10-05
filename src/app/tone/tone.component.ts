import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tone } from '../interfaces/tone';
import { PlaypausestopComponent } from '../playpausestop/playpausestop.component';
import { ClockService } from '../services/clock';

@Component({
  selector: 'app-tone',
  templateUrl: "tone.component.html",
})
export class ToneComponent implements OnInit {
  @Input() tone:Tone = {duration:1000,index:1,note:220,type:"sine",uid:"1"};
  @Output() toneChange:EventEmitter<Tone> = new EventEmitter<Tone>()
  constructor(public clockservice:ClockService) { 

    this.clockservice.time.subscribe(t => {
      console.log("tick",t)

      if(this.tone.index==t){
        this.playTone()
      }
    });

  }
  context = new AudioContext();
  types = ['sine', 'square', 'sawtooth', 'triangle'];
  notes = [220, 440, 880];
  duration = this.tone!.duration;
  durations = [500, 1000, 2000];

  ngOnInit(): void {
   
  }

  playTone() {
    this.play(this.tone.type, this.tone.note, this.duration);
  }


  play(type: string, note: number, duration: number) {
    const oscillator = this.context.createOscillator();
    oscillator.type = type as OscillatorType;
    oscillator.frequency.value = note;
    oscillator.connect(this.context.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), duration);
  }
}
