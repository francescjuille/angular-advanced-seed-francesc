import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './common/services/auth/auth-guard.service';
import { ROUTES_CONSTANTS } from './constants/routes.constants';
const routes: Routes = [

  {
    path: ROUTES_CONSTANTS.homePage,
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
    canActivate: [ AuthGuardService ]
  },
  {
    path:ROUTES_CONSTANTS.login,
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
