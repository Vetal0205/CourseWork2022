import { Component,ViewChild, OnInit } from '@angular/core';
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
    // onePageTechnic: IAuto[] = [];
    filterLength!: number;
    filterList: IFilter[] = [];

    page = 1;
    pageSize = 9;
    pageSizes = [3, 6, 9];
    pagelistLength!: number;



    constructor(private service: TechnicService) { }

    ngOnInit(): void {
        this.service.getFilters().subscribe((filters) => { this.filterList = filters; });
        this.service.getTechnic().subscribe((technics) => {
            this.allTechnicList = technics;
            this.filterLength = this.allTechnicList.length;
            this.pagelistLength = this.allTechnicList.length;
            this.page = 1
        });
    }
    handlePageChange(event: number): void {
        this.page = event;
    }
    update() {
        this.service.getTechnic().subscribe((technics) => { this.allTechnicList = technics; this.pagelistLength = this.allTechnicList.length; this.page = 1 });

    }
    listFilter(filter: IFilter) {
        if (this.allTechnicList.length != this.filterLength) {
            this.update();
        }
        this.allTechnicList = this.allTechnicList.filter(type => type.type == filter.filter);
        this.pagelistLength = this.allTechnicList.length;
        this.page = 1;
    }
}
