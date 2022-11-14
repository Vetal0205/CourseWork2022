import { Component, OnInit } from '@angular/core';

//import animatons from angular-animations
import {
  rubberBandAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    rubberBandAnimation({duration: 800}),
  ]
})
export class HeaderComponent implements OnInit {

  //declare var of animated object
  header_icon_1 = false;
  header_icon_2 = false;
  header_icon_3 = false;

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



  constructor() { }

  ngOnInit(): void {
  }

}
