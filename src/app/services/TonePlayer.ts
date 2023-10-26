import { ChangeDetectorRef } from "@angular/core";
import { Goto, ToneInterface } from "../interfaces/tone";
import { BehaviorSubject, Subject } from "rxjs";

export class ToneManager {
    tones: (ToneInterface|Goto)[] = [
        { "type": "sine", "note":[ "C2"], "duration": "8n", "index": 1, "uid": "lncs5v462n2yrb9p6s2",distortion:0 },
        { "type": "sine", "note":[ "D4"], "duration": "8n", "index": 2, "uid": "lncs5v93ujot8pp2hec",distortion:0 },
        { "type": "sine", "note":[ "E4"], "duration": "8n", "index": 3, "uid": "lncs5vdtn1e8sehr7rr",distortion:0 },
        { "index": 4, "uid": "lncs5vu0qurrph2u8jb", "gotoIndex": 0 }
      ];

    types = ['sine', 'square', 'sawtooth', 'triangle'];
    notes = [220, 440, 880];
    durations = [500, 1000, 2000];
    playIndex = 1;
    tonessubject:BehaviorSubject<(ToneInterface|Goto)[]> = new BehaviorSubject(this.tones)

   init(){
    this.tonessubject.next(this.tones)
    
   }

    addTone(type: string, note: string[], duration: string, index: number,uid:string,distortion:number) {
        this.tones.push({ type, note, duration, index,uid ,distortion});
        this.tonessubject.next(this.tones)
    }
    addGoto(index: number,uid:string,gotoIndex:number) {
        this.tones.push({ index,uid,gotoIndex });
        this.tonessubject.next(this.tones)

    }

    // playTone(index: number) {
    //     const tone = this.tones[index];
    //     // Code to play the tone goes here
    //     // console.log(`Playing a ${tone.type} wave at ${tone.note} Hz for ${tone.duration} ms`);
    // }
   
    deleteTone(tone: ToneInterface | Goto) {
        const newTones = this.tones.filter(t => t?.uid !== tone.uid);
        this.tones = newTones;
        this.tonessubject.next(this.tones);
      }
     
      
      
}
