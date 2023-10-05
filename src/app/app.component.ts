import { ChangeDetectorRef, Component } from '@angular/core';
import { TonePlayer } from './services/TonePlayer';
import { Tone } from './interfaces/tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  constructor(private ref: ChangeDetectorRef) {}
  player = new TonePlayer();

  addTone() {
    this.player.addTone('sine', 440, 1000, 1, generateUID());
  }
  updateTone(tone: Tone) {
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
