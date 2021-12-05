import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ROUTES_CONSTANTS } from 'src/app/constants/routes.constants';
import { HttpService } from '../api/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  a=false;

  constructor(private router: Router, private httpService: HttpService) { }

  async login(username: string, password: string) {
    let requestBody = {username: username, password: password};
    const result = await this.httpService.callService("login", 'POST', requestBody).toPromise().then(result => {
      if(result.data.status) {
        this.storeAuthToken(result.data.token)
        this.isAuthenticated.next(true);
        this.a=true;
      }
      return result
    });
    return result
    
  }

  storeAuthToken(token: string) {
    localStorage.setItem("token", token);
  }

  removeAuthToken() {
    localStorage.removeItem("token")
  }

  async checkAuthenticated() {
    // TODO: replace this.a variable for call to Api Service for get if is autenticated
    console.log("authenticated:"+this.a)
    const authenticated = this.a;
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }
    

  async logout(redirect: string) {
      this.isAuthenticated.next(false);
      this.removeAuthToken();
      this.router.navigate([ROUTES_CONSTANTS.login]);
  }
}
