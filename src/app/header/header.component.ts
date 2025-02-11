import { Component, OnInit } from '@angular/core';

//import animatons from angular-animations
import {
  bounceInOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    bounceInOnEnterAnimation({ anchor: 'enter', delay: 100 })
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
