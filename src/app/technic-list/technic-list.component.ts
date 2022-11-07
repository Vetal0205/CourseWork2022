import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/i-auto';
import { IFilter } from '../interfaces/ifilter';
import { TechnicService } from '../services/technic.service';

@Component({
  selector: 'app-technic-list',
  templateUrl: './technic-list.component.html',
  styleUrls: ['./technic-list.component.scss']
})
export class TechnicListComponent implements OnInit {

  allTechnicList: IAuto[] = [];
  listLength!: number;
  filterList: IFilter[] = [];

  constructor(private service: TechnicService) { }

  ngOnInit(): void {
    this.service.getFilters().subscribe((filters) => { this.filterList = filters; });
    this.service.getTechnic().subscribe((technics) => { this.allTechnicList = technics; this.listLength = this.allTechnicList.length; });
    
  }

  update() {
    this.service.getTechnic().subscribe((technics) => { this.allTechnicList = technics; });
  }
  listFilter(filter: IFilter) {
    if (this.allTechnicList.length != this.listLength) {
      this.update();
    }
    this.allTechnicList = this.allTechnicList.filter(type => type.type == filter.filter);
  }
}
