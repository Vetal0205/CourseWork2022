import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TechnicService } from '../services/technic.service';
import { IAuto } from '../interfaces/i-auto';
import { IMission } from '../interfaces/i-mission';

@Component({
  selector: 'app-draggable-m-t-lists',
  templateUrl: './draggable-m-t-lists.component.html',
  styleUrls: ['./draggable-m-t-lists.component.scss']
})
export class DraggableMTListsComponent implements OnInit {

  constructor(private service: TechnicService) { }
  allTechnicList: IAuto[] = [];
  technicForMissionList: IAuto[] = [];
  missionformlist: IMission[] = [];

  
  ngOnInit(): void {
    this.getTechnic();
  }
  getTechnic() {
    this.service.getTechnic().subscribe((technics) => { this.allTechnicList = technics; });
  }

  drop(event: CdkDragDrop<IAuto[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
