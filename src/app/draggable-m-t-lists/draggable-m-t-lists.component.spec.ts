import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableMTListsComponent } from './draggable-m-t-lists.component';

describe('DraggableMTListsComponent', () => {
  let component: DraggableMTListsComponent;
  let fixture: ComponentFixture<DraggableMTListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggableMTListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggableMTListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
