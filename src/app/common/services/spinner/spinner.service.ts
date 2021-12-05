import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public spinnerLoading = new BehaviorSubject(false);
  constructor() { }
}
