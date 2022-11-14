import { Component, OnInit } from '@angular/core';

//import animatons from angular-animations
import {
  rubberBandAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  animations: [
    rubberBandAnimation({duration: 600}),
  ]
})
export class MainSectionComponent implements OnInit {

    //declare var of animated object
    main_icon_1 = false;
    main_icon_2 = false;
    main_icon_3 = false;
  
    //functions of declared objects
    mouseEnter_icon_1(){
      this.main_icon_1 = false;
      setTimeout(() => { this.main_icon_1 = true; }, 1);
    }
    mouseEnter_icon_2(){
      this.main_icon_2 = false;
      setTimeout(() => { this.main_icon_2 = true; }, 1);
    }
    mouseEnter_icon_3(){
      this.main_icon_3 = false;
      setTimeout(() => { this.main_icon_3 = true; }, 1);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
