import { Component, OnInit } from '@angular/core';

//import animatons from angular-animations
import {
  rubberBandAnimation,
  bounceInOnEnterAnimation,
  pulseAnimation
} from 'angular-animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    rubberBandAnimation({duration: 800}),
    bounceInOnEnterAnimation({ anchor: 'enter', delay: 100 }),
    pulseAnimation({ anchor: "click", duration: 800, scale: 1.2})
  ]
})
export class HeaderComponent implements OnInit {

  //declare var of animated object
  header_icon_1 = false;
  header_icon_2 = false;
  header_icon_3 = false;

  header_icon_1_click = false;
  header_icon_2_click = false;
  header_icon_3_click = false;

  //functions of declared objects
  mouseEnter_icon_1(){
    this.header_icon_1 = false;
    setTimeout(() => { this.header_icon_1 = true; }, 1);
  }
  mouseEnter_icon_2(){
    this.header_icon_2 = false;
    setTimeout(() => { this.header_icon_2 = true; }, 1);
  }
  mouseEnter_icon_3(){
    this.header_icon_3 = false;
    setTimeout(() => { this.header_icon_3 = true; }, 1);
  }

  mouseClick_icon_1(){
    this.header_icon_1_click = false;
    setTimeout(() => { this.header_icon_1_click = true; }, 1);
  }
  mouseClick_icon_2(){
    this.header_icon_2_click = false;
    setTimeout(() => { this.header_icon_2_click = true; }, 1);
  }
  mouseClick_icon_3(){
    this.header_icon_3_click = false;
    setTimeout(() => { this.header_icon_3_click = true; }, 1);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
