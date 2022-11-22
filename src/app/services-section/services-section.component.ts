import { Component, OnInit } from '@angular/core';

//import animatons from angular-animations
import {
  jelloAnimation,
  bounceInOnEnterAnimation
} from 'angular-animations';

import * as Aos from 'aos';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
  animations: [
    jelloAnimation(),
    bounceInOnEnterAnimation({ anchor: 'enter', delay: 100 }),
  ]
})
export class ServicesSectionComponent implements OnInit {

  //declare var of animated object
  services_icon_1 = false;
  services_icon_2 = false;
  services_icon_3 = false;
  services_icon_4 = false;
  services_icon_5 = false;
  services_icon_6 = false;

  services_icons = false;

  //functions of declared objects
  mouseEnter_icon_1(){
    this.services_icon_1 = false;
    setTimeout(() => { this.services_icon_1 = true; }, 1);
  }
  mouseEnter_icon_2(){
    this.services_icon_2 = false;
    setTimeout(() => { this.services_icon_2 = true; }, 1);
  }
  mouseEnter_icon_3(){
    this.services_icon_3 = false;
    setTimeout(() => { this.services_icon_3 = true; }, 1);
  }
  mouseEnter_icon_4(){
    this.services_icon_4 = false;
    setTimeout(() => { this.services_icon_4 = true; }, 1);
  }
  mouseEnter_icon_5(){
    this.services_icon_5 = false;
    setTimeout(() => { this.services_icon_5 = true; }, 1);
  }
  mouseEnter_icon_6(){
    this.services_icon_6 = false;
    setTimeout(() => { this.services_icon_6 = true; }, 1);
  }

  Show_icons(){
    this.services_icons = false;
  }

  constructor() { }

  ngOnInit(): void {
  Aos.init({
    startEvent: 'load',
    once: false
  });
  }

}


