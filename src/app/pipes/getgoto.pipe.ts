import { Pipe, PipeTransform } from '@angular/core';
import { Goto } from '../interfaces/tone';

@Pipe({
  name: 'getgoto'
})
export class GetgotoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): Goto {
    return this.isTone(value);
  }

  isTone(item: any): Goto {
    return item; // Replace 'propertyInTone' with a property that exists in Tone
  }

}
