import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/i-auto';
import { TechnicService } from '../services/technic.service';

@Component({
  selector: 'app-technic-list',
  templateUrl: './technic-list.component.html',
  styleUrls: ['./technic-list.component.scss']
})
export class TechnicListComponent implements OnInit {

  technicList:IAuto[]=[];

  constructor(private service:TechnicService) { }

  ngOnInit(): void {
    this.updateTechnic();
  }

  updateTechnic(){
    this.service.getTechnic().subscribe(
      (technics)=>{
        this.technicList = technics;
      }
    );
  }
}
