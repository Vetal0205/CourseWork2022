import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TechnicService } from '../services/technic.service';
import { ITechForMission } from '../interfaces/itech-for-mission';
import { IDistance } from '../interfaces/idistance';
import { IMission } from '../interfaces/i-mission';

@Component({
  selector: 'app-draggable-m-t-lists',
  templateUrl: './draggable-m-t-lists.component.html',
  styleUrls: ['./draggable-m-t-lists.component.scss']
})
export class DraggableMTListsComponent implements OnInit {
  constructor(private service: TechnicService) { }
  technicForMissionList: ITechForMission[] = [];
  allTechnicList: ITechForMission[] = [];

  
  ngOnInit(): void {
    this.getTechnic();
  }
  getTechnic() {
    this.service.getTechnic().subscribe((technics) => {
      technics.forEach((tech, index) => {
        let { id, type, name, fuel_tank, image, fuel_consumption, speed } = tech;
        let el: ITechForMission = {
          ...tech,
          amount: 1
        }
        this.allTechnicList.push(el);
      });
    });
  }
  addMission(mission: IMission){
    // console.log(mission);
    this.service.addMission(mission).subscribe((res) =>{console.log(res)})
  }
  drop(event: CdkDragDrop<ITechForMission[]>) {
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
