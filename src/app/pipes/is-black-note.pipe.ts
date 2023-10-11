import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isBlackNote'
})
export class IsBlackNotePipe implements PipeTransform {

  transform(note: string): boolean {
    return note.includes('#');
  }

}
