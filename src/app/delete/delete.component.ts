import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Goto, ToneInterface } from '../interfaces/tone';
import { TonePlayer } from '../services/TonePlayer';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[AppComponent]
})
export class DeleteComponent {
  constructor(public appcomponent:AppComponent,private ref: ChangeDetectorRef){

  }
@Input() tone!:ToneInterface|Goto
delete(tone:ToneInterface|Goto){
  console.log(tone)
this.appcomponent.deleteTone(tone)
}
}
