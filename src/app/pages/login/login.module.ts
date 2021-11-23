import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { FooterModule } from 'src/app/common/components/footer/footer.module';
import { HeaderModule } from 'src/app/common/components/header/header.module';



@NgModule({
  declarations: [
    LoginContainerComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule,
     
  ]
})
export class LoginModule { }
