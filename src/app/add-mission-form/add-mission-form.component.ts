import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, } from '@angular/core';
import { IMission } from '../interfaces/i-mission';
import { ITechForMission } from '../interfaces/itech-for-mission';
import { IDistance } from '../interfaces/idistance';

@Component({
  selector: 'app-add-mission-form',
  templateUrl: './add-mission-form.component.html',
  styleUrls: ['./add-mission-form.component.scss']
})
export class AddMissionFormComponent implements  OnInit {

  @Output() onAddMission: EventEmitter<IMission> = new EventEmitter();
  @Input() techForMission!: ITechForMission[];
  distanceEl!: IDistance;
  fuelPrice: number = 30;
  regexfuel = new RegExp('[0-9]+');
  @Input() eventChanged!:Event;

  lengthCounter: number = 0;
  totalFuel!: number;
  totalSum!: number;

  newMission!: IMission;

  constructor() { }

  onDistanceGet(distance: IDistance) {
    this.distanceEl = distance;
    this.outputUpdate();
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChanges){
    if(changes['eventChanged'].currentValue != changes['eventChanged'].previousValue){
      this.outputUpdate();
    }
  }
  ngDoCheck() {
    if (this.techForMission.length == 0) {
      this.lengthCounter = 0;
      this.totalSum, this.totalFuel = 0;
    }
    if (this.techForMission.length > this.lengthCounter) {
      this.outputUpdate()
      this.lengthCounter++;
    }
    if (this.techForMission.length < this.lengthCounter) {
      this.outputUpdate()
      this.lengthCounter--;
    }
  }
  outputUpdate() {
    this.totalFuel = this.fuelsum(this.techForMission, this.regexfuel);
    this.totalSum = Math.round(this.totalFuel * this.fuelPrice);
  }
  fuelsum(tech: ITechForMission[], regex: RegExp): number {
    let sum: number = 0
    let amount: number;
    tech.forEach((t) => {
      let str = t.fuel_consumption;
      amount = t.amount;
      if (this.distanceEl) {
        sum = Math.round(sum + (Number(regex.exec(str)) * amount) * this.distanceEl.distance / 100);
      }
      else {
        sum = sum + (Number(regex.exec(str)) * amount)
      }
    });
    return sum;
  }
  onSubmit() {
    try {
      this.newMission = {
        route: `${this.distanceEl.from} - ${this.distanceEl.from}`,
        fuel: this.totalFuel,
        price: this.totalSum,
        technique: this.techForMission,
        distance: this.distanceEl.distance
      }
    } catch (error) {
      alert("Виберіть техніку на виїзд наряду, також виберіть відправну та кінцеві точки поїздки на карті");
      return;
    }
    this.onAddMission.emit(this.newMission);
  }
}