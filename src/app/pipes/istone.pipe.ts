import { Pipe, PipeTransform } from '@angular/core';
import { ToneInterface } from '../interfaces/tone';

@Pipe({
  name: 'isTone'
})
export class IsTonePipe implements PipeTransform {

  transform(value: any, ...args: any[]): boolean {
    return this.isTone(value);
  }

  isTone(item: any): item is ToneInterface {
    return item && 'duration' in item; // Replace 'propertyInTone' with a property that exists in Tone
  }


}
