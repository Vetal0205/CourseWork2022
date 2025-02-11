import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicItemComponent } from './technic-item.component';

describe('TechnicItemComponent', () => {
  let component: TechnicItemComponent;
  let fixture: ComponentFixture<TechnicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
