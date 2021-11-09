import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageEditContainerComponent } from './containers/home-page-edit-container/home-page-edit-container.component';
import { HomePageStatisticsContainerComponent } from './containers/home-page-statistics-container/home-page-statistics-container.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { HeaderModule } from 'src/app/common/components/header/header.module';
import { FooterModule } from 'src/app/common/components/footer/footer.module';



@NgModule({
  declarations: [
    HomePageEditContainerComponent,
    HomePageStatisticsContainerComponent
  ],
  imports: [
    HomePageRoutingModule,
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ]
})
export class HomePageModule { }
