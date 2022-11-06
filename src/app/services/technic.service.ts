import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuto } from '../interfaces/i-auto';

@Injectable({
  providedIn: 'root'
})
export class TechnicService {

  url:string="http://localhost:3000/automobiles"

  constructor(private http:HttpClient) { }

  getTechnic():Observable<IAuto[]>{
    return this.http.get<IAuto[]>(this.url);
  }
  // getTechnicById(id:number):Observable<IAuto>{
  //   return this.http.get<IAuto>(this.url+"/"+id);
  // }
}
