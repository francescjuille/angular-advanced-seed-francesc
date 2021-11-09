import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageStatisticsContainerComponent } from './home-page-statistics-container.component';

describe('HomePageStatisticsContainerComponent', () => {
  let component: HomePageStatisticsContainerComponent;
  let fixture: ComponentFixture<HomePageStatisticsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageStatisticsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageStatisticsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
