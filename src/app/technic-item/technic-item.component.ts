import { Component, OnInit, Input } from '@angular/core';
import { IAuto } from '../interfaces/i-auto';

@Component({
  selector: 'app-technic-item',
  templateUrl: './technic-item.component.html',
  styleUrls: ['./technic-item.component.scss']
})
export class TechnicItemComponent implements OnInit {
  @Input() tech!: IAuto;
  
  constructor() { }

  ngOnInit(): void {
  }

}
