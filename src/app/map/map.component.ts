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

  initMap(): void{
    let loader = new Loader({
    apiKey: environment.GOOGLE_MAPS_API_KEY_FOR_JS_INIT,
    version: "weekly"
    });

    let originLat: number | undefined = 50.447731;
    let originLng: number | undefined = 30.542721;
    let destinationLat: number | undefined = 49.993500;
    let destinationLng: number | undefined = 36.230385;

    loader.load().then(() => {
      let map = new google.maps.Map(document.getElementById("map") as HTMLElement,{
        zoom: 6,
        center: {lat: 49.19547672777136, lng: 32.41458017684137}
      });
      let markerOrigin = new google.maps.Marker(
        {
          title: "Початок",
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 50.447731, lng: 30.542721}
        });
      let markerDestination = new google.maps.Marker(
        {
          title: "Кінець",
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 49.993500, lng: 36.230385}
        });
        google.maps.event.addListener(markerOrigin, 'dragend', function() 
        {
            originLat = markerOrigin.getPosition()?.lat();
            originLng = markerOrigin.getPosition()?.lng();
            console.log(originLat, originLng);
        });
        google.maps.event.addListener(markerDestination, 'dragend', function() 
        {
            destinationLat = markerDestination.getPosition()?.lat();
            destinationLng = markerDestination.getPosition()?.lng();
            console.log(destinationLat, destinationLng);
        });
        //this.service.getDistance(originLat, originLng, destinationLat, destinationLng).subscribe((data) => {console.log(data)})
    })
  };
}
