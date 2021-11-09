import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageEditContainerComponent } from './containers/home-page-edit-container/home-page-edit-container.component';
import { HomePageStatisticsContainerComponent } from './containers/home-page-statistics-container/home-page-statistics-container.component';
import { HomePageRoutingModule } from './home-page-routing.module';



@NgModule({
  declarations: [
    HomePageEditContainerComponent,
    HomePageStatisticsContainerComponent
  ],
  imports: [
    HomePageRoutingModule,
    CommonModule
  ]
})
export class HomePageModule { }
