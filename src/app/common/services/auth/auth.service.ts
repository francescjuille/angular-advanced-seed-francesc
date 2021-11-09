import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }

  async login(username: string, password: string) {
    this.isAuthenticated.next(true);
  }

  async checkAuthenticated() {
    // TODO: implement call to Api Service for get if is autenticated
    const authenticated = true;
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }
    

  async logout(redirect: string) {
      this.isAuthenticated.next(false);
      this.router.navigate(['login']);
  }
}
