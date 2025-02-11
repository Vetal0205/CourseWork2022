import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMissionFormComponent } from './add-mission-form.component';

describe('AddMissionFormComponent', () => {
  let component: AddMissionFormComponent;
  let fixture: ComponentFixture<AddMissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMissionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
