//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistanceService {

  getDistance(request: any):any{
    let loader = new Loader({
      apiKey: environment.GOOGLE_MAPS_API_KEY_FOR_JS_INIT,
      version: "weekly"
    });

    loader.load().then(() => {
      const service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(request, function(response: any, status: any){
        console.log(response);
      })
  })
  }
}
