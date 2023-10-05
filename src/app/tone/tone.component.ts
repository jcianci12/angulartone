import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tone',
  templateUrl: "tone.component.html",
})
export class ToneComponent implements OnInit {
  @Input() shouldStart: boolean | undefined;
  context = new AudioContext();
  type = 'sine';
  types = ['sine', 'square', 'sawtooth', 'triangle'];
  note = 440;
  notes = [220, 440, 880];
  duration = 1000;
  durations = [500, 1000, 2000];

  ngOnInit() {}

  playTone() {
    const oscillator = this.context.createOscillator();
    oscillator.type = this.type as OscillatorType;
    oscillator.frequency.value = this.note;
    oscillator.connect(this.context.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), this.duration);
  }
}
