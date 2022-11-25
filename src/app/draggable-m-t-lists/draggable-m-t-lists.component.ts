import { Component, OnInit, Input } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TechnicService } from '../services/technic.service';
import { ITechForMission } from '../interfaces/itech-for-mission';
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

  pageAlltech = 1;
  pageSizeA = 6;
  pageSizes = [6, 9, 12];
  pageAllListLength!: number;

  handlePageChange(event: number): void {
    this.pageAlltech = event;

  }
  handlePageSizeChange(event: any): void {
    this.pageAlltech = event;
    this.pageSizeA = event.target.value;
    this.pageAlltech = 1;
  }
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
      this.pageAllListLength = this.allTechnicList.length;
      console.log(this.pageAllListLength);
    });
  }
  addMission(mission: IMission) {
    this.service.addMission(mission).subscribe((res) => { console.log(res) })
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
    this.pageAllListLength = this.allTechnicList.length;
  }
  enterPredicate(drag: CdkDrag, drop: CdkDropList):boolean {
    if (drop.data.length == 6 ) {alert("Максимум 6 видів техніки може бути відправлено на наряд!")}
    return drop.data.length <= 6 ;
  }
}
