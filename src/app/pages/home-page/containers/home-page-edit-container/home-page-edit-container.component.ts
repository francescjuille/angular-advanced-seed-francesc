import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-edit-container',
  templateUrl: './home-page-edit-container.component.html',
  styleUrls: ['./home-page-edit-container.component.scss']
})
export class HomePageEditContainerComponent implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder,private router:Router) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
  ngOnInit(): void {
  }

  goStatisticsUser(){
    this.router.navigate(['/home-page/statistics'])
  }

}
