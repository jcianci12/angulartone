import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSelectedNote',
  pure:false
})
export class IsSelectedNotePipe implements PipeTransform {

  transform(notes:string[],note:string): boolean {
    console.log(notes,note)
    return notes.find(i=>i==note)!=undefined;
  }

}
