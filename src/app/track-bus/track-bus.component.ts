import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from '../service/location.service';
declare const L: any;

@Component({
  selector: 'app-track-bus',
  templateUrl: './track-bus.component.html',
  styleUrls: ['./track-bus.component.css'],
})
export class TrackBusComponent implements OnInit ,OnDestroy{
  buses = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
   interval!: Subscription;
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    let map = L.map('map');
    this.displayMap([17.426013, 78.340666], map)
    // map.setView([17.426013, 78.340666],16)
    
    //     var locatm=[ [17.426996, 78.341224],
    //     [17.426013, 78.340666],
    //     [17.425696, 78.340150],
    //     [17.425692, 78.339697],
    //     [17.426814, 78.335755],
    //     [17.426953, 78.333975],
    //     [17.426636, 78.330582],
    //     [17.427099, 78.329105],
    //     [17.428933, 78.326095],
    //     [17.430687, 78.323366],
    //     [17.430687, 78.323366],
    //     [17.436770, 78.317807],
    //     [17.438747, 78.315692],
    // ]
    // var i=0;
    var marker: any = undefined;
    setInterval(() => {
      // var locat=locatm[i%locatm.length]
       this.interval= this.locationService.getlocation().subscribe((data) => {
        console.log(data.location);
        var locat = data.location;

        console.log(locat, '+++++bharat+++++');
        this.displayMap(locat, map);
        var busIcon = L.icon({
          iconUrl: '../../assets/R.png',
          // shadowUrl: '../../assets/R.png',

          iconSize: [50, 25], // size of the icon
          shadowSize: [95, 35], // size of the shadow
          iconAnchor: [10, 20], // point of the icon which will correspond to marker's location
          shadowAnchor: [10, 62], // the same for the shadow
          popupAnchor: locat, // point from which the popup should open relative to the iconAnchor
        });

        if (marker) {
          map.removeLayer(marker);
        }
        marker = L.marker(locat);
        map.addLayer(marker);

        // i++
      });
    }, 5000);
  }
  ngOnDestroy(){
  
  this.interval.unsubscribe()
  }



  displayMap(locat: number[], map: any) {
    map.setView(locat,16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);

    var latlngs = [
      [17.426996, 78.341224],
      [17.426013, 78.340666],
      [17.425696, 78.34015],
      [17.425692, 78.339697],
      [17.426814, 78.335755],
      [17.426953, 78.333975],
      [17.426636, 78.330582],
      [17.427099, 78.329105],
      [17.428933, 78.326095],
      [17.430687, 78.323366],
      [17.430687, 78.323366],
      [17.43677, 78.317807],
      [17.438747, 78.315692],
    ];

    var polyline = L.polyline(latlngs, { color: 'red'}).addTo(map);
    //   console.log(locat, '===========================');
  }
}
