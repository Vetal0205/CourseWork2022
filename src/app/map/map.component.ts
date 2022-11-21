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

  initMap(): any{
    let loader = new Loader({
    apiKey: environment.GOOGLE_MAPS_API_KEY_FOR_JS_INIT,
    version: "weekly"
    });

    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement,{
        zoom: 6,
        center: {lat: 49.19547672777136, lng: 32.41458017684137}
      });
      this.initMarkers(map);
    })
  };

  initMarkers(map: google.maps.Map):void{

    let origin = { lat: 50.447731, lng: 30.542721 };
    let destination = {lat: 49.993500, lng: 36.230385};
    let request = this.buildRequest(origin, destination);
    this.service.getDistance(request).then((response) => { this.parceResponce(response) });

    let markerOrigin = new google.maps.Marker(
      {
        title: "Початок",
        label: "П",
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: origin
      });
    let markerDestination = new google.maps.Marker(
      {
        title: "Кінець",
        label: "К",
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: destination
      });
    google.maps.event.addListener(markerOrigin, 'dragend', () => {
      origin.lat = markerOrigin.getPosition()?.lat()!;
      origin.lng = markerOrigin.getPosition()?.lng()!;
      request = this.buildRequest(origin, destination);
      this.service.getDistance(request).then((response) => { this.parceResponce(response) });
    });
    google.maps.event.addListener(markerDestination, 'dragend', () => {
      destination.lat = markerDestination.getPosition()?.lat()!;
      destination.lng = markerDestination.getPosition()?.lng()!;
      request = this.buildRequest(origin, destination);
      this.service.getDistance(request).then((response) => { this.parceResponce(response) });
    });
  }

  parceResponce(response: google.maps.DistanceMatrixResponse): void {
    console.log(response);
    // убоать [0] когда будет реилизовано добавление маркеров
    let origins = response.originAddresses;
    let destinations = response.destinationAddresses[0];

    for (let i = 0; i < origins.length; i++) {
      let results = response.rows[i].elements;
      for (let j = 0; j < results.length; j++) {
        let distance_str = results[j].distance.text;
        let distance_num = results[j].distance.value;
        let duration = results[j].duration.text;
        let from = origins[i];
        let to = destinations[j];
        // когда будет несколько маркеров, переписать формирование елемента 
        this.distance = { distance_str, distance_num, duration, from, to };
      }
    }
    this.onGetDistance.emit(this.distance);
  }
  buildRequest(origin: any, destination: any): google.maps.DistanceMatrixRequest {
    let request = {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    };
    return request;
  }
  
}


