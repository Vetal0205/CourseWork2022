import { Component, OnInit } from '@angular/core';

//import animatons from angular-animations
import {
  rubberBandAnimation,
  swingAnimation
} from 'angular-animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    rubberBandAnimation({duration: 800}),
    swingAnimation()
  ]
})
export class FooterComponent implements OnInit {

  //declare var of animated object
  footer_icon_1 = false;
  footer_icon_2 = false; 
  footer_icon_3 = false;   

  footer_icon_phone = false;

  //functions of declared objects
  mouseEnter_icon_1(){
    this.footer_icon_1 = false;
    setTimeout(() => { this.footer_icon_1 = true; }, 1);
  }
  mouseEnter_icon_2(){
    this.footer_icon_2 = false;
    setTimeout(() => { this.footer_icon_2 = true; }, 1);
  }
  mouseEnter_icon_3(){
    this.footer_icon_3 = false;
    setTimeout(() => { this.footer_icon_3 = true; }, 1);
  }

  mouseEnter_icon_phone(){
    this.footer_icon_phone = false;
    setTimeout(() => { this.footer_icon_phone = true; }, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
