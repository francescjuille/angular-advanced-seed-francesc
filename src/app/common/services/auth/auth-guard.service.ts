import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ROUTES_CONSTANTS } from 'src/app/constants/routes.constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthService, public router: Router) {}
    async canActivate() {
      if (!await this.authService.checkAuthenticated()) {
        await this.router.navigate([ROUTES_CONSTANTS.login]);
        return false;
      }
      return true;
    }
}
