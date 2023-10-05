import { Tone } from "../interfaces/tone";

export class TonePlayer {
    types = ['sine', 'square', 'sawtooth', 'triangle'];
    notes = [220, 440, 880];
    durations = [500, 1000, 2000];
    playIndex = 1;
    
    tones: Tone[] = [];

    addTone(type: string, note: number, duration: number, index: number,uid:string) {
        this.tones.push({ type, note, duration, index,uid });
    }
updatetone(t:string){

}
    playTone(index: number) {
        const tone = this.tones[index];
        // Code to play the tone goes here
        console.log(`Playing a ${tone.type} wave at ${tone.note} Hz for ${tone.duration} ms`);
    }
}
