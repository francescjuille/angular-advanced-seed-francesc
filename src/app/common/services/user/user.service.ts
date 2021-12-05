import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../api/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpService: HttpService) { }

  public getUserData(): Observable<any> {
    return this.httpService.callService("get-user-data");
  }
}
