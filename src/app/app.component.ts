import { ChangeDetectorRef, Component } from '@angular/core';
import { ToneManager } from './services/TonePlayer';
import { Goto, ToneInterface } from './interfaces/tone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ToneManager]
})
export class AppComponent {
  title = 'app';
  tones!: (ToneInterface | Goto)[];
  constructor(private ref: ChangeDetectorRef,public player:ToneManager) {
   
  }

  addTone() {
    this.player.addTone('sine', 'C4', "8n", 1, generateUID());
  }
  addGoto(){
    this.player.addGoto(1, generateUID(),1);
  }
 
  ngOnInit(): void {
    this.player.tonessubject.subscribe(i=>
      {
      console.log("tones",i)
      this.tones = i})
    this.player.init()

  }


}

function generateUID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
