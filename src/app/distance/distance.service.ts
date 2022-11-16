import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {
  
  apikey:string = environment.GOOGLE_MAPS_API_KEY_FOR_DICTANCE_MATRIX;
  apiurl:string = "https://maps.googleapis.com/maps/api/distancematrix/json?";

  constructor(private http:HttpClient) { }
  
  getDistance(
    originLat: number | undefined,
    originLng: number | undefined,
    destinationLat: number | undefined,
    destinationLng: number | undefined
    ):Observable<any>{
    const url = `${this.apiurl}origins=${originLat}${originLng}&destinations=${destinationLat}${destinationLng}&key=${this.apikey}`;
    return this.http.get<any>(url);
  }
}
