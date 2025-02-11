import { Component, OnInit } from '@angular/core';

//import animatons from angular-animations
import {
  pulseAnimation,
  jelloAnimation
} from 'angular-animations';

import * as Aos from 'aos';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.scss'],
  animations: [
    pulseAnimation({duration: 800}),
    jelloAnimation()
  ]
})
export class CommentsSectionComponent implements OnInit {

    //declare var of animated object
    comments_icon_1 = false;
    comments_icon_2 = false;
    comments_icon_3 = false;

    comments_title_1 = false;
    comments_title_2 = false;
    comments_title_3 = false;

    //functions of declared objects
    mouseEnter_comment_1(){
      this.comments_icon_1 = false;
      setTimeout(() => { this.comments_icon_1 = true; }, 1);
    }
    mouseEnter_comment_2(){
      this.comments_icon_2 = false;
      setTimeout(() => { this.comments_icon_2= true; }, 1);
    }
    mouseEnter_comment_3(){
      this.comments_icon_3 = false;
      setTimeout(() => { this.comments_icon_3= true; }, 1);
    }

    mouseEnter_title_1(){
      this.comments_title_1 = false;
      setTimeout(() => { this.comments_title_1 = true; }, 1);
    }
    mouseEnter_title_2(){
      this.comments_title_2 = false;
      setTimeout(() => { this.comments_title_2= true; }, 1);
    }
    mouseEnter_title_3(){
      this.comments_title_3 = false;
      setTimeout(() => { this.comments_title_3= true; }, 1);
    }

  constructor() { }

  ngOnInit(): void {
    Aos.init({
      startEvent: 'load',
      once: false
    });
  }

}
