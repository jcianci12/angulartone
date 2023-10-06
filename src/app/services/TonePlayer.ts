import { ChangeDetectorRef } from "@angular/core";
import { Goto, ToneInterface } from "../interfaces/tone";
import { BehaviorSubject } from "rxjs";

export class TonePlayer {
    tones: (ToneInterface|Goto)[] = [
        { "type": "sine", "note": "C4", "duration": "8n", "index": 1, "uid": "lncs5v462n2yrb9p6s2" },
        { "type": "sine", "note": "D4", "duration": "8n", "index": 2, "uid": "lncs5v93ujot8pp2hec" },
        { "type": "sine", "note": "E4", "duration": "8n", "index": 3, "uid": "lncs5vdtn1e8sehr7rr" },
        { "index": 4, "uid": "lncs5vu0qurrph2u8jb", "gotoIndex": 0 }
      ];

    types = ['sine', 'square', 'sawtooth', 'triangle'];
    notes = [220, 440, 880];
    durations = [500, 1000, 2000];
    playIndex = 1;
    


    addTone(type: string, note: string, duration: string, index: number,uid:string) {
        this.tones.push({ type, note, duration, index,uid });
    }
    addGoto(index: number,uid:string,gotoIndex:number) {
        this.tones.push({ index,uid,gotoIndex });
    }

    playTone(index: number) {
        const tone = this.tones[index];
        // Code to play the tone goes here
        // console.log(`Playing a ${tone.type} wave at ${tone.note} Hz for ${tone.duration} ms`);
    }
   

      
}
