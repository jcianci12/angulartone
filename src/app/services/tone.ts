// tone.service.ts
import { Injectable } from '@angular/core';
import * as Tone from 'tone';

@Injectable({
  providedIn: 'root'
})
export class ToneService {

  constructor() { }

  playTone(tone: {type: string, note: string, duration: string}) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(tone.note, tone.duration);
  }

}
