import { Component, OnInit, Input } from '@angular/core';
import { ITechForMission } from '../interfaces/itech-for-mission';

@Component({
  selector: 'app-draggable-m-t-item',
  templateUrl: './draggable-m-t-item.component.html',
  styleUrls: ['./draggable-m-t-item.component.scss']
})
export class DraggableMTItemComponent implements OnInit {
  @Input() tech!: ITechForMission;
  @Input() all!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
