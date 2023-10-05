import { Pipe, PipeTransform } from '@angular/core';
import { Goto } from '../interfaces/tone';

@Pipe({
  name: 'isgoto'
})
export class IsgotoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): boolean {
    return this.isTone(value);
  }

  isTone(item: any): item is Goto {
    return item && 'gotoIndex' in item; // Replace 'propertyInTone' with a property that exists in Tone
  }

}
