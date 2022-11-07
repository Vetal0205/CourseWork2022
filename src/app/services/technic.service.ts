import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuto } from '../interfaces/i-auto';
import { IMission } from '../interfaces/i-mission';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class TechnicService {
  private apiurl:string = "http://localhost:3000/automobiles";


  
  constructor(private http:HttpClient) { }

  getTechnic():Observable<IAuto[]>{
    return this.http.get<IAuto[]>(this.apiurl);
  }
  getTechnicById(id:number):Observable<IAuto>{
    const url = `${this.apiurl}/${id}`;
    return this.http.get<IAuto>(url);
  }
  addMission(mission: IMission): Observable<Task> {
    return this.http.post<Task>(this.apiurl, mission, httpOptions);
  }
  deleteMission(mission: IMission): Observable<Task> {
    const url = `${this.apiurl}/${mission.id}`
    return this.http.delete<Task>(url);
  }
  updateMisson(mission: IMission): Observable<Task> {
    const url = `${this.apiurl}/${mission.id}`;
    return this.http.put<Task>(this.apiurl, mission, httpOptions);
  }
}
