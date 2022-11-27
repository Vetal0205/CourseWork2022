import { Component, OnInit, Input } from '@angular/core';
import { IAuto } from '../interfaces/i-auto';
import * as Aos from 'aos';

@Component({
  selector: 'app-technic-item',
  templateUrl: './technic-item.component.html',
  styleUrls: ['./technic-item.component.scss']
})
export class TechnicItemComponent implements OnInit {
  @Input() tech!: IAuto;
  
  constructor() { }

  ngOnInit(): void {
    Aos.init({
      startEvent: 'load',
      once: false
    });
  }

}
