import { Goto, ToneInterface } from "../interfaces/tone";

export class TonePlayer {
    types = ['sine', 'square', 'sawtooth', 'triangle'];
    notes = [220, 440, 880];
    durations = [500, 1000, 2000];
    playIndex = 1;
    
    tones: (ToneInterface|Goto)[] = [];

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
