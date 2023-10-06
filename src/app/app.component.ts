import { ChangeDetectorRef, Component } from '@angular/core';
import { TonePlayer } from './services/TonePlayer';
import { ToneInterface } from './interfaces/tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TonePlayer]
})
export class AppComponent {
  title = 'app';
  constructor(private ref: ChangeDetectorRef,public player:TonePlayer) {
   
    
  }

  addTone() {
    this.player.addTone('sine', 'C4', "8n", 1, generateUID());
  }
  addGoto(){
    this.player.addGoto(1, generateUID(),1);
  }
 



}

function generateUID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
