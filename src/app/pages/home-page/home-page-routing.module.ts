import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageEditContainerComponent } from './containers/home-page-edit-container/home-page-edit-container.component';
import { HomePageStatisticsContainerComponent } from './containers/home-page-statistics-container/home-page-statistics-container.component';

const routes: Routes = [
  {
    path: 'edit',
    component: HomePageEditContainerComponent 
  },
  {
    path: 'statistics',
    component: HomePageStatisticsContainerComponent 
  },
  {
    path: '',
    redirectTo: 'statistics'
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
