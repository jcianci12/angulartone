import { Injectable } from '@angular/core';
import * as Tone from 'tone';
import { ToneInterface } from '../interfaces/tone';

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

  playTone(tone: ToneInterface) {
    this.distortion.distortion = tone.distortion;
    tone.note.forEach(n => {
          this.synth.triggerAttackRelease(n, tone.duration);

    });
  }

  ngOnDestroy() {
    this.synth.dispose();
    this.distortion.dispose();
  }
}
