import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [
    LoginContainerComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class LoginModule { }
