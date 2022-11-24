import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableMTItemComponent } from './draggable-m-t-item.component';

describe('DraggableMTItemComponent', () => {
  let component: DraggableMTItemComponent;
  let fixture: ComponentFixture<DraggableMTItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggableMTItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggableMTItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
