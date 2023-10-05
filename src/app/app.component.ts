import { ChangeDetectorRef, Component } from '@angular/core';
import { TonePlayer } from './services/TonePlayer';
import { ToneInterface } from './interfaces/tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  constructor(private ref: ChangeDetectorRef) {
    this.player.tones = [
      { "type": "sine", "note": "C4", "duration": "8n", "index": 1, "uid": "lncs5v462n2yrb9p6s2" },
      { "type": "sine", "note": "D4", "duration": "8n", "index": 2, "uid": "lncs5v93ujot8pp2hec" },
      { "type": "sine", "note": "E4", "duration": "8n", "index": 3, "uid": "lncs5vdtn1e8sehr7rr" },
      { "index": 4, "uid": "lncs5vu0qurrph2u8jb", "gotoIndex": 1 }
    ]
    
  }
  player = new TonePlayer();

  addTone() {
    this.player.addTone('sine', 'C4', "8n", 1, generateUID());
  }
  addGoto(){
    this.player.addGoto(1, generateUID(),1);

  }
  updateTone(tone: ToneInterface) {
    console.log("tone",tone)
    let t = this.player.tones.find((i) => i.uid == tone.uid);
    t = tone;
    this.ref.detectChanges();
    console.log(this.player.tones)
  }

}

function generateUID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
