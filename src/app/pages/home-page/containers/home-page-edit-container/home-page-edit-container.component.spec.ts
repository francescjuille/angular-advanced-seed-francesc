import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageEditContainerComponent } from './home-page-edit-container.component';

describe('HomePageEditContainerComponent', () => {
  let component: HomePageEditContainerComponent;
  let fixture: ComponentFixture<HomePageEditContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageEditContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
