import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TechnicService } from '../services/technic.service';
import { IAuto } from '../interfaces/i-auto';


@Component({
  selector: 'app-technic-page',
  templateUrl: './technic-page.component.html',
  styleUrls: ['./technic-page.component.scss']
})
export class TechnicPageComponent implements OnInit {
  allTechnicList: IAuto[] = [];
  listLength!: number;
  
  @Input() tech!: IAuto;
  
  ngAfterViewInit() {
    this.service.getTechnic().subscribe((technics) => { this.allTechnicList = technics; });
  }
  
  constructor(private service: TechnicService) { }

  ngOnInit(): void {
    this.service.getTechnic().subscribe((technics) => { this.allTechnicList = technics; this.listLength = this.allTechnicList.length; });
  }

}
