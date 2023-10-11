import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSelectedNote'
})
export class IsSelectedNotePipe implements PipeTransform {

  transform(notes:string[],note:string): boolean {
    return notes.find(i=>i==note)!=undefined;
  }

}
