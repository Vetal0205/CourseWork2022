import { Component, OnInit, ViewChild } from '@angular/core';
import { TechnicService } from '../services/technic.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '/assets/Dozor-B.jpg', weight: 1.0079, symbol: 'H'},
  {position: 2, name: '/assets/HMMWV.jpg', weight: 4.0026, symbol: 'He'},
  {position: 3, name: '/assets/Kozak-2m1.jpg', weight: 6.941, symbol: 'Li'},
  {position: 4, name: '/assets/Kraz-Spartan.jpg', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: '/assets/Kraz-Cougar.jpg', weight: 10.811, symbol: 'B'},
  {position: 6, name: '/assets/Kraz-Shrek.jpg', weight: 12.0107, symbol: 'C'},
  {position: 7, name: '/assets/T-64BV.jpg', weight: 14.0067, symbol: 'N'},
  {position: 8, name: '/assets/T-72AMT.jpg', weight: 15.9994, symbol: 'O'},
  {position: 9, name: '/assets/PT-91.jpg', weight: 18.9984, symbol: 'F'},
  {position: 10, name: '/assets/T80-BV.jpg', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: '/assets/bmp-1.jpg', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: '/assets/bmp-2.jpg', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: '/assets/m80.jpg', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: '/assets/btr-70.jpg', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: '/assets/brm-1k.jpg', weight: 30.9738, symbol: 'P'},
  {position: 16, name: '/assets/brdm-2.jpg', weight: 32.065, symbol: 'S'},
  {position: 17, name: '/assets/Verba.jpg', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: '/assets/Grad.jpg', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: '/assets/HIMARS.jpg', weight: 39.0983, symbol: 'K'},
  {position: 20, name: '/assets/M270MLRS.jpg', weight: 40.078, symbol: 'Ca'},
  {position: 21, name: '/assets/BM-30Smerch.jpg', weight: 40.078, symbol: 'Ca'},
];


@Component({
  selector: 'app-technic-page',
  templateUrl: './technic-page.component.html',
  styleUrls: ['./technic-page.component.scss']
})
export class TechnicPageComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private service: TechnicService) { }

  ngOnInit(): void {
  }

}
