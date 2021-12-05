import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AuthService } from './common/services/auth/auth.service';
import { SpinnerService } from './common/services/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  showSpinner = false;
  constructor(
    private translate: TranslateService,
    private authService: AuthService,
    private spinnerService: SpinnerService
    ) 
  {
    this.translate.setDefaultLang('en');
  }


  ngOnInit(): void {
    this.subscribeSpinnerEvent();
    this.authService.checkAuthenticated();
  }

  onActivate(event){
    //console.log(event)
  }

  subscribeSpinnerEvent() {
    this.spinnerService.spinnerLoading.subscribe(data => {
      this.showSpinner = data;
    })
  }
}
