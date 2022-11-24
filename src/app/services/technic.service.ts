import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuto } from '../interfaces/i-auto';
import { IMission } from '../interfaces/i-mission';
import { IFilter } from '../interfaces/ifilter';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class TechnicService {
  private apiurl:string = "http://localhost:3000";


  
  constructor(private http:HttpClient) { }

  getTechnic():Observable<IAuto[]>{
    const url = `${this.apiurl}/automobiles`
    return this.http.get<IAuto[]>(url);
  }
  getFilters():Observable<IFilter[]>{
    const url = `${this.apiurl}/filters`
    return this.http.get<IFilter[]>(url);
  }
  getTechnicById(id:number):Observable<IAuto>{
    const url = `${this.apiurl}/automobiles/${id}`;
    return this.http.get<IAuto>(url);
  }
  addMission(mission: IMission): Observable<IMission> {
    const url = `${this.apiurl}/missions`;
    return this.http.post<IMission>(url, mission, httpOptions);
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
