import { Pipe, PipeTransform } from '@angular/core';
import { Tone } from '../interfaces/tone';

@Pipe({
  name: 'gettone'
})
export class GettonePipe implements PipeTransform {

  transform(value: any, ...args: any[]): Tone {
    return this.getTone(value);
  }

 
  getTone(item: any): Tone {
    return item as Tone; // Replace 'propertyInTone' with a property that exists in Tone
  }

}

