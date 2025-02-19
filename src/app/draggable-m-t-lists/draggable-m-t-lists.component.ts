import { Component, OnInit, Input } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TechnicService } from '../services/technic.service';
import { ITechForMission } from '../interfaces/itech-for-mission';
import { IMission } from '../interfaces/i-mission';
import { MissionsService } from '../services/missions.service';

@Component({
  selector: 'app-draggable-m-t-lists',
  templateUrl: './draggable-m-t-lists.component.html',
  styleUrls: ['./draggable-m-t-lists.component.scss']
})
export class DraggableMTListsComponent implements OnInit {
  constructor(private techService: TechnicService, private missionService: MissionsService) { }
  technicForMissionList: ITechForMission[] = [];
  allTechnicList: ITechForMission[] = [];
  eventChanged!:Event;

  techheader__showing: boolean=true;

  pageAlltech = 1;
  pageSizeA = 6;
  pageSizes = [6, 9, 12];
  pageAllListLength!: number;

  techheader__showingFunction(){
    this.techheader__showing = false;
  }
  handlePageChange(event: number): void {
    this.pageAlltech = event;

  }
  handlePageSizeChange(event: any): void {
    this.pageAlltech = event;
    this.pageSizeA = event.target.value;
    this.pageAlltech = 1;
  }
  onAmountInputChange(event:Event){
    this.eventChanged = event
  }
  ngOnInit(): void {
    this.getTechnic();
  }
  getTechnic() {
    this.techService.getTechnic().subscribe((technics) => {
      technics.forEach((tech, index) => {
        let { id, type, name, fuel_tank, image, fuel_consumption, speed } = tech;
        let el: ITechForMission = {
          ...tech,
          amount: 1
        }
        this.allTechnicList.push(el);
      });
      this.pageAllListLength = this.allTechnicList.length;
    });
  }
  addMission(mission: IMission) {
    // this.technicForMissionList.map(val => mission.technique.push(Object.assign({}, val)));   
    console.log(mission); 
    this.missionService.addMission(mission).subscribe((res) => {  })
  }
  drop(event: CdkDragDrop<ITechForMission[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex + ((this.pageAlltech - 1) * this.pageSizeA),
        event.currentIndex,
      );
    
      this.techheader__showingFunction();
    }
    this.pageAllListLength = this.allTechnicList.length;
  }
  enterPredicate(drag: CdkDrag, drop: CdkDropList): boolean {
    return drop.data.length < 7;
  }
}
