import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicPageComponent } from './technic-page.component';

describe('TechnicPageComponent', () => {
  let component: TechnicPageComponent;
  let fixture: ComponentFixture<TechnicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
