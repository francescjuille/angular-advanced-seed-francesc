import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../api/http.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpService: HttpService) { }

  public getAllUserBooks(): Observable<any> {
    return this.httpService.callService("get-all-user-books");
  }
}
