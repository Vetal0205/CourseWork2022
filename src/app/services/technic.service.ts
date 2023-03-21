import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuto } from '../interfaces/i-auto';


@Injectable({
  providedIn: 'root'
})
export class TechnicService {
  private apiurl:string = "http://localhost:8080/back-end/api/car_entity";


  
  constructor(private http:HttpClient) { }

  getTechnic():Observable<IAuto[]>{
    const url = `${this.apiurl}/retrieve`
    return this.http.get<IAuto[]>(url);
  }
 
  getTechnicById(id:number):Observable<IAuto>{
    const url = `${this.apiurl}/retrieve/${id}`;
    return this.http.get<IAuto>(url);
  }

}
