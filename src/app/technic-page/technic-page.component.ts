import { Component, OnInit, ViewChild } from '@angular/core';
import { TechnicService } from '../services/technic.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface Automobiles {
  picture1: string;
  picture2: string;
  picture3: string;
}

const ELEMENT_DATA: Automobiles[] = [
  {picture1:'/assets/Dozor-B.jpg' , picture2: '/assets/HMMWV.jpg',picture3:'/assets/Kozak-2m1.jpg' },
  {picture1:'/assets/Kraz-Spartan.jpg' , picture2: '/assets/Kraz-Cougar.jpg', picture3:'/assets/Kraz-Shrek.jpg' },
  {picture1:'/assets/T-64BV.jpg' , picture2: '/assets/T-72AMT.jpg', picture3:'/assets/PT-91.jpg'},
  {picture1:'/assets/T80-BV.jpg' , picture2: '/assets/bmp-1.jpg', picture3:'/assets/bmp-2.jpg'},
  {picture1:'/assets/m80.jpg' , picture2: '/assets/btr-70.jpg', picture3:'/assets/brm-1k.jpg'},
  {picture1:'/assets/brdm-2.jpg' , picture2: '/assets/Verba.jpg', picture3:'/assets/Grad.jpg'},
  {picture1:'/assets/HIMARS.jpg' , picture2: '/assets/M270MLRS.jpg', picture3:'/assets/BM-30Smerch.jpg'},
];


@Component({
  selector: 'app-technic-page',
  templateUrl: './technic-page.component.html',
  styleUrls: ['./technic-page.component.scss']
})
export class TechnicPageComponent implements OnInit {
  
  displayedColumns: string[] = ['picture1','picture2','picture3'];
  dataSource = new MatTableDataSource<Automobiles>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private service: TechnicService) { }

  ngOnInit(): void {
  }

}
