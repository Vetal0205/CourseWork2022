import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicItemDetailComponent } from './technic-item-detail.component';

describe('TechnicItemDetailComponent', () => {
  let component: TechnicItemDetailComponent;
  let fixture: ComponentFixture<TechnicItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
