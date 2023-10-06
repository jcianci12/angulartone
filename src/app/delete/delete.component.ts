import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Goto, ToneInterface } from '../interfaces/tone';
import { ToneManager } from '../services/TonePlayer';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[AppComponent]
})
export class DeleteComponent {
  constructor(private ref: ChangeDetectorRef,public app:AppComponent){

  }
@Input() tone!:ToneInterface|Goto
delete(tone:ToneInterface|Goto){
  console.log(tone)
this.app.player.deleteTone(tone)
}
}
