import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IAuto } from '../interfaces/i-auto';
import { TechnicService } from '../services/technic.service';

import {
  heartBeatAnimation,
  bounceInOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-technic-item-detail',
  templateUrl: './technic-item-detail.component.html',
  styleUrls: ['./technic-item-detail.component.scss'],
  animations: [
    heartBeatAnimation(),
    bounceInOnEnterAnimation({ anchor: 'enter', delay: 200 })
  ]
})
export class TechnicItemDetailComponent implements OnInit {
  count_icon_1 = false;
  count_icon_2 = false;
  count_icon_3 = false;
  count_icon_4 = false;
  count_icon_5 = false;
  count_icon_6 = false;
  count_icon_7 = false;
  count_icon_8 = false;

  mouseEnter_count_1(){
    this.count_icon_1 = false;
    setTimeout(() => { this.count_icon_1 = true; }, 1);
  }
  mouseEnter_count_2(){
    this.count_icon_2 = false;
    setTimeout(() => { this.count_icon_2 = true; }, 1);
  }
  mouseEnter_count_3(){
    this.count_icon_3 = false;
    setTimeout(() => { this.count_icon_3 = true; }, 1);
  }
  mouseEnter_count_4(){
    this.count_icon_4 = false;
    setTimeout(() => { this.count_icon_4 = true; }, 1);
  }
  mouseEnter_count_5(){
    this.count_icon_5 = false;
    setTimeout(() => { this.count_icon_5 = true; }, 1);
  }
  mouseEnter_count_6(){
    this.count_icon_6 = false;
    setTimeout(() => { this.count_icon_6 = true; }, 1);
  }
  mouseEnter_count_7(){
    this.count_icon_7 = false;
    setTimeout(() => { this.count_icon_7 = true; }, 1);
  }
  mouseEnter_count_8(){
    this.count_icon_8 = false;
    setTimeout(() => { this.count_icon_8 = true; }, 1);
  }


  technique: IAuto | undefined;
  constructor(private route: ActivatedRoute, private location: Location, private service:TechnicService) { }

  ngOnInit(): void {
    this.gettech();
  }

  gettech(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getTechnicById(id).subscribe(tech => this.technique = tech);
    
    // this.service.getTechnicById(id).subscribe(
    //   (tech)=>{
    //     this.technique = tech;
    //   }
    // );
  }
  goBack(): void {
    this.location.back();
  }
  // Нужно вставить сервис получения доп инфы с джисон сервера
}
