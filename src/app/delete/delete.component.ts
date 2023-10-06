import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Goto, ToneInterface } from '../interfaces/tone';
import { TonePlayer } from '../services/TonePlayer';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers:[TonePlayer]
})
export class DeleteComponent {
  constructor(public toneplayer:TonePlayer,private ref: ChangeDetectorRef){

  }
@Input() tone!:ToneInterface|Goto
delete(tone:ToneInterface|Goto){
  console.log(tone)
this.toneplayer.deleteTone(tone)
}
}
