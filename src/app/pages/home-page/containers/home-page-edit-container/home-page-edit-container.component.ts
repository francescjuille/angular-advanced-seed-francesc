import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/common/services/user/user.service';
import { ROUTES_CONSTANTS } from 'src/app/constants/routes.constants';

@Component({
  selector: 'app-home-page-edit-container',
  templateUrl: './home-page-edit-container.component.html',
  styleUrls: ['./home-page-edit-container.component.scss']
})
export class HomePageEditContainerComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,private router:Router,private userService: UserService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.getUserData();
  }

  buildForm() {
    this.form = this.fb.group({
      email: ['', Validators.email],
      name: ['', Validators.required],
      age: ['', Validators.required, Validators.pattern("^[0-9]*$")],
    });
  }

  getUserData() {
    this.userService.getUserData().subscribe(data=>{
      console.log("DATAA:")
      console.log(data)
      this.form.patchValue({
        email: data.data.email,
        name:data.data.name,
        age:data.data.age
      });
    })

  }

  goStatisticsUser(){
    this.router.navigate([ROUTES_CONSTANTS.homePageStatistics])
  }

  saveData(){
    console.log("data saved")
  }

}
