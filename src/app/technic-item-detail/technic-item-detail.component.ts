import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IAuto } from '../interfaces/i-auto';
import { TechnicService } from '../services/technic.service';

@Component({
  selector: 'app-technic-item-detail',
  templateUrl: './technic-item-detail.component.html',
  styleUrls: ['./technic-item-detail.component.scss']
})
export class TechnicItemDetailComponent implements OnInit {

  technique: IAuto | undefined;
  constructor(private route: ActivatedRoute, private location: Location, private service:TechnicService) { }

  ngOnInit(): void {

  }

  gettech(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.<Сервис>.<Метод>(id).subscribe(tech => this.technique = tech);
    
    // this.service.getTechnicById(id).subscribe(
    //   (tech)=>{
    //     this.technique = tech;
    //   }
    // );
  }
  goBack(): void {
    this.location.back();
  }
  // Нужно вставить сервис получения доп инфы с джисон сервера
}
