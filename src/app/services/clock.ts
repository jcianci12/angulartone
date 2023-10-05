import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  public _time = 0;
  public time = new BehaviorSubject<number>(this._time);
}
