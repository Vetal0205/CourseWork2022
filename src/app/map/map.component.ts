import { Component, OnInit } from '@angular/core';
import { DistanceService } from '../distance/distance.service';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private service: DistanceService) { }

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

    let data: any;
    let request = this.buildRequest(origin, destination);

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
      google.maps.event.addListener(markerOrigin, 'dragend', () => 
      {
          origin.lat = markerOrigin.getPosition()?.lat()!;
          origin.lng = markerOrigin.getPosition()?.lng()!;
          //console.log(origin.lat, origin.lng);
          request = this.buildRequest(origin, destination);
          data = this.service.getDistance(request);
          //console.log(data);
      });
      google.maps.event.addListener(markerDestination, 'dragend', () => 
      {
          destination.lat = markerDestination.getPosition()?.lat()!;
          destination.lng = markerDestination.getPosition()?.lng()!;
          //console.log(destination.lat, destination.lng);
          request = this.buildRequest(origin, destination);
          data = this.service.getDistance(request);
          //console.log(data);
      });
      request = this.buildRequest(origin, destination);
      data = this.service.getDistance(request);
  }

  buildRequest(origin:any, destination:any):any{
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


