import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMission } from '../interfaces/i-mission';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private apiurl:string = "http://localhost:8080/back-end/api/mission_entity";
  addMission(mission: IMission): Observable<IMission> {
    const url = `${this.apiurl}/create`;
    return this.http.post<IMission>(url, mission, httpOptions);
  }
  deleteMission(mission: IMission): Observable<Task> {
    const url = `${this.apiurl}/delete/${mission.id}`
    return this.http.delete<Task>(url);
  }
  updateMission(mission: IMission): Observable<Task> {
    const url = `${this.apiurl}/update/${mission.id}`;
    return this.http.put<Task>(this.apiurl, mission, httpOptions);
  }
  constructor(private http:HttpClient) { }
}
