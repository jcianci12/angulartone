// tone.service.ts
import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})

export class ToneService {

  constructor() { }

  playTone(tone: {type: string, note: string, duration: string}) {
    synth.triggerAttackRelease(tone.note, tone.duration);
  }

}
const synth = new Tone.PolySynth(Tone.Synth).toDestination();
