import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from './common/services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private translate: TranslateService, private authService: AuthService) {
    this.translate.setDefaultLang('en');
}
  ngOnInit(): void {
    this.authService.checkAuthenticated();
  }

  onActivate(event){
    //console.log(event)
  }
}
