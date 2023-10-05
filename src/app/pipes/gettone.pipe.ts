import { Pipe, PipeTransform } from '@angular/core';
import { ToneInterface } from '../interfaces/tone';

@Pipe({
  name: 'gettone'
})
export class GettonePipe implements PipeTransform {

  transform(value: any, ...args: any[]): ToneInterface {
    return this.getTone(value);
  }

 
  getTone(item: any): ToneInterface {
    return item as ToneInterface; // Replace 'propertyInTone' with a property that exists in Tone
  }

}

