import { Component,ViewChild, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/i-auto';
import { IFilter } from '../interfaces/ifilter';
import { TechnicService } from '../services/technic.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'; 


@Component({
  selector: 'app-technic-list',
  templateUrl: './technic-list.component.html',
  styleUrls: ['./technic-list.component.scss']
})
export class TechnicListComponent implements OnInit {

  allTechnicList: IAuto[] = [];
  listLength!: number;
  filterList: IFilter[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  Automobiles : IAuto[] =[{
    "id": 1,
    "type": "armored-car",
    "name": "Дозор-Б",
    "power":"122-192к.с.(залежно від типу двигуна) ",
    "weight":"6,3 тони",
    "fuel_consumption":"25 л (по шосе)",
    "fuel_range":"до 700 км",
    "fuel_tank":"146 л",
    "crew":"3 особи, до 8-ми пасажирів(залежно від комплектації)",
    "speed":"до 113 км/г",
    "production":"Завод імені В.О. Малишева Львівський бронетанковий ремонтний завод",
    "image":"/assets/Dozor-B.png"
},
{
    "id": 2,
    "type": "armored-car",
    "name": "HMMWV",
    "power":"160-190к.с.(залежно від типу двигуна) ",
    "weight":"4,6 тони",
    "fuel_consumption":"16 л (по шосе)",
    "fuel_range":"до 480 км",
    "fuel_tank":"80 л",
    "crew":"2 особи, до 8-ми пасажирів(залежно від комплектації)",
    "speed":"до 105 км/г",
    "production":"AM General(USA)",
    "image":"/assets/HMMWV.png"
},
{
    "id": 3,
    "type": "armored-car",
    "name": "Козак-2м1",
    "power":"280к.с. ",
    "weight":"14 тон",
    "fuel_consumption":"18 л (по шосе)",
    "fuel_range":"до 1000 км",
    "fuel_tank":"146 л",
    "crew":"2 особи та до 6-ти пасажирів(залежно від комплектації)",
    "speed":"до 110 км/г",
    "production":"НПО 'Практика'",
    "image":"/assets/Kozak-2m1.png"
},
{
    "id": 4,
    "type": "armored-car",
    "name": "КрАЗ Спартан",
    "power":"300к.с. ",
    "weight":"8,9 тони",
    "fuel_consumption":"30 л (по шосе)",
    "fuel_range":"до 800 км",
    "fuel_tank":"278 л",
    "crew":"2 особи та до 6-ми пасажирів",
    "speed":"до 110 км/г",
    "production":"Кременчуцький автомобільний завод за ліцензією компанії Streit Group",
    "image":"/assets/Kraz-Spartan.png"
},
{
    "id": 5,
    "type": "armored-car",
    "name": "КрАЗ Кугуар",
    "power":"218-240к.с.(залежно від типу двигуна) ",
    "weight":"4,2 тони",
    "fuel_consumption":"22 л (по шосе)",
    "fuel_range":"до 800 км",
    "fuel_tank":"180 л",
    "crew":"2 особи та до 6-ми пасажирів",
    "speed":"до 105 км/г",
    "production":"Кременчуцький автомобільний завод за ліцензією компанії Streit Group",
    "image":"/assets/Kraz-Cougar.png"
},
{
    "id": 6,
    "type": "armored-car",
    "name": "КрАЗ Шрек",
    "power":"300-400к.с.(залежно від типу двигуна) ",
    "weight":"17,5 тони",
    "fuel_consumption":"28 л (по шосе)",
    "fuel_range":"до 1000 км",
    "fuel_tank":"280 л",
    "crew":"2 особи та до 10-ти пасажирів",
    "speed":"до 80 км/г",
    "production":"Кременчуцький автомобільний завод за ліцензією компанії Streit Group",
    "image":"/assets/Kraz-Shrek.png"
},
{
    "id": 7,
    "type": "tank",
    "name": "Т64-БВ",
    "power":"700к.с. ",
    "weight":"42 тони",
    "fuel_consumption":"200 л (по шосе)",
    "fuel_range":"до 600 км",
    "fuel_tank":"1270 л",
    "crew":"3 ",
    "speed":"до 60 км/г(шосе) до 40км/г(бездоріжжя)",
    "image":"/assets/T-64BV.png"
},
{
    "id": 8,
    "type": "tank",
    "name": "Т72-АМТ",
    "power":"840к.с. ",
    "weight":"44,5 тони",
    "fuel_consumption":"240 л (по шосе)",
    "fuel_range":"до 500 км",
    "fuel_tank":"1200 л",
    "crew":"3 ",
    "speed":"до 60 км/г(шосе) до 35км/г(бездоріжжя)",
    "image":"/assets/T-72AMT.png"
},
{
    "id": 9,
    "type": "tank",
    "name": "ПТ-91'Твердий'(польська модернізація Т72М1)",
    "power":"850к.с. ",
    "weight":"46 тони",
    "fuel_consumption":"240 л (по шосе)",
    "fuel_range":"до 480 км",
    "fuel_tank":"1270 л",
    "crew":"3 ",
    "speed":"до 60 км/г(шосе) до 40км/г(бездоріжжя)",
    "image":"/assets/PT-91.png"
},
{
    "id": 10,
    "type": "tank",
    "name": "Т-80БВ",
    "power":"1000к.с. ",
    "weight":"44,5 тони",
    "fuel_consumption":"270 л (по шосе)",
    "fuel_range":"до 400 км",
    "fuel_tank":"1100 л",
    "crew":"3 ",
    "speed":"до 70 км/г(шосе) до 40км/г(бездоріжжя)",
    "image":"/assets/T80-BV.png"
},
{
    "id": 11,
    "type": "IVF", 
    "name": "БМП-1",
    "power":"300к.с. ",
    "weight":"13 тон",
    "fuel_consumption":"80 л (по шосе)",
    "fuel_range":"до 600 км",
    "fuel_tank":"450 л",
    "crew":"3 особи, до 8-ми пасажирів(залежно від комплектації)",
    "speed":"до 65 км/г(шосе) до 40км/г(бездоріжжя)",
    "image":"/assets/bmp-1.png"
},
{
    "id": 12,
    "type": "IVF",
    "name": "БМП-2",
    "power":"300к.с. ",
    "weight":"13,8 тони",
    "fuel_consumption":"92 л (по шосе)",
    "fuel_range":"до 400 км",
    "fuel_tank":"462 л",
    "crew":"3 особи, до 7-ми пасажирів(залежно від комплектації)",
    "speed":"до 65 км/г(шосе) до 40км/г(бездоріжжя)",
    "image":"/assets/bmp-2.png"
},
{
    "id": 13,
    "type": "IVF",
    "name": "М-80",
    "power":"260к.с. ",
    "weight":"13,8 тони",
    "fuel_consumption":"98 л (по шосе)",
    "fuel_range":"до 500 км",
    "fuel_tank":"510 л",
    "crew":"3 особи, до 7-ми пасажирів(залежно від комплектації)",
    "speed":"до 58 км/г(шосе)",
    "image":"/assets/m80.png"
},
{
    "id": 14,
    "type": "IVF",
    "name": "БТР-70",
    "power":"240к.с. ",
    "weight":"11,5 тони",
    "fuel_consumption":"116 л (по шосе)",
    "fuel_range":"до 250 км",
    "fuel_tank":"290 л",
    "crew":"2 особи, до 8-ми пасажирів(залежно від комплектації)",
    "speed":"до 80 км/г(шосе) до 40км/г(бездоріжжя)",
    "image":"/assets/btr-70.png"
},
{
    "id": 15,
    "type": "IVF",
    "name": "БРМ-1К",
    "power":"300к.с. ",
    "weight":"13,2 тони",
    "fuel_consumption":"112 л (по шосе)",
    "fuel_range":"до 380 км",
    "fuel_tank":"462 л",
    "crew":"8 осіб ",
    "speed":"до 65 км/г(шосе) до 40км/г(бездоріжжя)",
    "image":"/assets/brm-1k.png"
},
{
    "id": 16,
    "type": "IVF",
    "name": "БРДМ-2",
    "power":"140к.с. ",
    "weight":"13,8 тони",
    "fuel_consumption":"70 л (по шосе)",
    "fuel_range":"до 750 км",
    "fuel_tank":"280 л",
    "crew":"3 особи, до 7-ми пасажирів(залежно від комплектації)",
    "speed":"до 90 км/г(шосе)",
    "image":"/assets/brdm-2.png"
},
{
    "id": 17,
    "type": "RVFS",
    "name": "Верба",
    "power":"400к.с. ",
    "weight":"20 тонн",
    "fuel_consumption":"40 л (по шосе)",
    "fuel_range":"до 1300 км",
    "fuel_tank":"500 л",
    "crew":"5 осіб",
    "speed":"до 85 км/г(шосе)",
    "image":"/assets/Verba.png"
},
{
    "id": 18,
    "type": "RVFS",
    "name": "Град",
    "power":"180к.с. ",
    "weight":"15 тони",
    "fuel_consumption":"48 л (по шосе)",
    "fuel_range":"до 750 км",
    "fuel_tank":"360 л",
    "crew":"3 особи",
    "speed":"до 80 км/г(шосе)",
    "image":"/assets/Grad.png"
},
{
    "id": 18,
    "type": "RVFS",
    "name": "M142 HIMARS",
    "power":"290к.с. ",
    "weight":"16,2 тони",
    "fuel_consumption":"90 л (по шосе)",
    "fuel_range":"до 480 км",
    "fuel_tank":"430 л",
    "crew":"3 особи",
    "speed":"до 85 км/г(шосе)",
    "image":"/assets/HIMARS.png"
},
{
    "id": 19,
    "type": "RVFS",
    "name": "M270 MLRS",
    "power":"500к.с. ",
    "weight":"24,5 тони",
    "fuel_consumption":"128 л (по шосе)",
    "fuel_range":"до 480 км",
    "fuel_tank":"617 л",
    "crew":"3 особи",
    "speed":"до 64 км/г(шосе)",
    "image":"/assets/M270MLRS.png"
},
{
    "id": 20,
    "type": "RVFS",
    "name": "БМ-30 Смерч",
    "power":"525к.с. ",
    "weight":"43,7 тони",
    "fuel_consumption":"100 л (по шосе)",
    "fuel_range":"до 900 км",
    "fuel_tank":"900 л",
    "crew":"3 особи",
    "speed":"до 60 км/г(шосе)",
    "image":"/assets/BM-30Smerch.png"
}];

  dataSource!: MatTableDataSource<IAuto>;


  constructor(private service: TechnicService) { }

  ngOnInit(): void {
    this.service.getFilters().subscribe((filters) => { this.filterList = filters; });
    this.service.getTechnic().subscribe((technics) => { this.allTechnicList = technics; this.listLength = this.allTechnicList.length; });
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = new MatTableDataSource(this.Automobiles);
    this.service.getTechnic().subscribe((technics) => { this.allTechnicList = technics; });
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
