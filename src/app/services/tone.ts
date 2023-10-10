import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})

export class ToneService {
  private distortion: Tone.Distortion;
  private synth: Tone.PolySynth;

  constructor() { 
    this.distortion = new Tone.Distortion().toDestination();
    this.synth = new Tone.PolySynth(Tone.Synth).connect(this.distortion).toDestination();
  }

  playTone(tone: {type: string, note: string, duration: string, distortion: number}) {
    this.distortion.distortion = tone.distortion;
    this.synth.triggerAttackRelease(tone.note, tone.duration);
  }

  ngOnDestroy() {
    this.synth.dispose();
    this.distortion.dispose();
  }
}
