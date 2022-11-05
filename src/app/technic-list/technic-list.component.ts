import { Component, OnInit } from '@angular/core';
import { IAuto } from '../interfaces/i-auto';

@Component({
  selector: 'app-technic-list',
  templateUrl: './technic-list.component.html',
  styleUrls: ['./technic-list.component.scss']
})
export class TechnicListComponent implements OnInit {

  constructor() { }

  technique: IAuto[] = [
    {
        id: 1,
        name: 'Козак-2м1',
        image: "/assets/Kozak-2m1.png",
        power:'', tank:'', fuel_consumption:'', speed:''

    },
    {
        id: 2,
        name: 'HMMWV',
        image: "/assets/HMMWV.png",
        power:'', tank:'', fuel_consumption:'', speed:''
    },
    {
        id: 3,
        name: 'Дозор-Б',
        image: "/assets/Dozor-B.png",
        power:'', tank:'', fuel_consumption:'', speed:''
    },
];

  ngOnInit(): void {
  }

}
