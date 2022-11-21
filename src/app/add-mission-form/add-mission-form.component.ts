import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { IMission } from '../interfaces/i-mission';
import { ITechForMission } from '../interfaces/itech-for-mission';
import { IDistance } from '../interfaces/idistance';

@Component({
  selector: 'app-add-mission-form',
  templateUrl: './add-mission-form.component.html',
  styleUrls: ['./add-mission-form.component.scss']
})
export class AddMissionFormComponent implements OnInit {

  @Output() onAddMission: EventEmitter<IMission> = new EventEmitter();
  @Input() techForMission!: ITechForMission[];
  @Input() distanceEl!: IDistance;
  fuelPrice: number = 30;
  regexfuel = new RegExp('[0-9]+');

  lengthCounter: number = 0;
  totalFuel!: number;
  totalSum!: number;

  newMission!: IMission;

  constructor() { }

  ngOnInit(): void {
    console.log("init");
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
  Console(tech: ITechForMission) {
    console.log('testing')
    console.log(tech)
  }
  outputUpdate() {
    this.totalFuel = this.fuelsum(this.techForMission, this.regexfuel);
    this.totalSum = Math.round(this.totalFuel * this.fuelPrice);
  }
  fuelsum(tech: ITechForMission[], regex: RegExp): number {
    let sum: number = 0
    let amount: number;
    tech.forEach((t) =>{
      let str = t.fuel_consumption;
      amount = t.amount;
      if (this.distanceEl) {
        sum = Math.round(sum + (Number(regex.exec(str)) * amount) * (this.distanceEl.distance_num / 1000) / 100);
      }
      else {
        sum = sum + (Number(regex.exec(str)) * amount)
      }
    });
    return sum;
  }
  onSubmit() {
    if (!this.newMission) {
      alert("Заповніть всі поля, та виберіть хоча б один вид техніки");
      return;
    }
    this.onAddMission.emit(this.newMission);
    this.newMission.id = -1;
    this.newMission.fuel = 0;
    this.newMission.price = 0;
    this.newMission.route = "";
    this.newMission.technique = [];
  }
}