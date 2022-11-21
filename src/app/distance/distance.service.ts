import { Injectable } from '@angular/core';
import { IDistance } from 'src/app/interfaces/idistance'
@Injectable({
  providedIn: 'root'
})
export class DistanceService {
  result!: IDistance;
  getRoute(request:google.maps.DirectionsRequest): Promise<google.maps.DirectionsResult> {
    const service = new google.maps.DirectionsService();
    return new Promise((resolve, reject) => {
      service.route(request, function (response: any, status: any){
        if (status == 'OK') {
          resolve(response);
        }
        else {
          reject(response);
        }
      })
    })
  }
}
