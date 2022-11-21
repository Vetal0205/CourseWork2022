import { Injectable } from '@angular/core';
import { IDistance } from 'src/app/interfaces/idistance'
@Injectable({
  providedIn: 'root'
})
export class DistanceService {
  result!: IDistance;
  getDistance(request: google.maps.DistanceMatrixRequest): Promise<google.maps.DistanceMatrixResponse> {

    const service = new google.maps.DistanceMatrixService();
    return new Promise((resove, reject) => {
      service.getDistanceMatrix(request, function (response: any, status: any) {
        if (status == 'OK') {
          resove(response);
        }
        else {
          reject(response);
        }
      })
    })
  }
}
