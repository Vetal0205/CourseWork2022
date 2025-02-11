import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilter } from '../interfaces/ifilter';
@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private apiurl:string = "http://localhost:8080/back-end/api/filter_entity";

  constructor(private http:HttpClient) { }
  getFilters():Observable<IFilter[]>{
    const url = `${this.apiurl}/retrieve`
    return this.http.get<IFilter[]>(url);
  }
}
