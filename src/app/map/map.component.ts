import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DistanceService } from '../distance/distance.service';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';
import { IDistance } from '../interfaces/idistance';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Output() onGetDistance: EventEmitter<IDistance> = new EventEmitter();
  constructor(private service: DistanceService) { }
  distance!: IDistance;

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): any {
    let loader = new Loader({
      apiKey: environment.GOOGLE_MAPS_API_KEY_FOR_JS_INIT,
      version: "weekly"
    });

    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        zoom: 6,
        center: { lat: 49.19547672777136, lng: 32.41458017684137 }
      });
      this.initMarkers(map);
    })
  };
  initMarkers(map: google.maps.Map): void {
    const directionsRenderer = new google.maps.DirectionsRenderer({ map, draggable:true })
    let origin:google.maps.LatLng = new google.maps.LatLng({ lat: 50.447731, lng: 30.542721 });
    let destination:google.maps.LatLng = new google.maps.LatLng({ lat: 49.993500, lng: 36.230385 });
    let request = this.buildRequest(origin, destination);
    this.service.getRoute(request).then((response) => { 
      directionsRenderer.setDirections(response);
    }).catch((e) => {
      alert("Could not display directions due to: " + e);
    });
    directionsRenderer.addListener("directions_changed", () => {
      const directions = directionsRenderer.getDirections();
      if (directions) {
        this.parceResponce(directions);
      }
    });
   
  }
  parceResponce(response: google.maps.DirectionsResult): void {
    let from = response.routes[0].legs[0].start_address;
    let to = response.routes[0].legs[0].end_address
    let distance = this.computeTotalDistance(response);
    let duration = response.routes[0].legs[0].duration?.text
    this.distance = { distance, duration, from, to };
    console.log(this.distance);
    this.onGetDistance.emit(this.distance);
  }
  computeTotalDistance(result: google.maps.DirectionsResult):number {
    let total = 0;
    const myroute = result.routes[0];
    if (!myroute) {
      return 0;
    }
    for (let i = 0; i < myroute.legs.length; i++) {
      total += myroute.legs[i]!.distance!.value;
    }
    total = total / 1000;
    return total
  }
  buildRequest(origin: any, destination: any): google.maps.DirectionsRequest {
    let request = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    };
    return request;
  }

}


