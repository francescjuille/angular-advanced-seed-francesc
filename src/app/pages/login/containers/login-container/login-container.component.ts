import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth/auth.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  errorApi = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
    
  }
  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;

    if (this.form.valid) {
      try {
        const username = this.form.get('username').value;
        const password = this.form.get('password').value;
        const resultLogin = await this.authService.login("dd", "sdd");
        this.errorApi = []; //TODO: put as response of login result
        console.log("login call mock component:")
        console.log(resultLogin.data.status)
        if(resultLogin.data.status) {
          console.log("valid login")
          this.router.navigate(['/home-page']);
        }
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}