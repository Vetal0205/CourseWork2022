import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITechForMission } from '../interfaces/itech-for-mission';
import * as Aos from 'aos';

@Component({
  selector: 'app-draggable-m-t-item',
  templateUrl: './draggable-m-t-item.component.html',
  styleUrls: ['./draggable-m-t-item.component.scss']
})
export class DraggableMTItemComponent implements OnInit {
  @Input() tech!: ITechForMission;
  @Input() all!: boolean;
  @Output() amountChanged: EventEmitter<Event> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    Aos.init({
      startEvent: 'load',
      once: false
    });
  }
  outputUpdate(event:Event) {
    console.log(event)
    this.amountChanged.emit(event);
  }
}
