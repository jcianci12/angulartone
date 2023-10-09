import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})

export class ToneService {

  constructor() { }

  playTone(tone: {type: string, note: string, duration: string, distortion: number}) {
    const distortion = new Tone.Distortion(tone.distortion).toDestination();
    const synth = new Tone.PolySynth(Tone.Synth).connect(distortion).toDestination();
    synth.triggerAttackRelease(tone.note, tone.duration);
  }

}
