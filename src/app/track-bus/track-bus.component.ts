import { Component, OnInit } from '@angular/core';
declare const L: any;
@Component({
  selector: 'app-track-bus',
  templateUrl: './track-bus.component.html',
  styleUrls: ['./track-bus.component.css'],
})
export class TrackBusComponent implements OnInit {
  buses=[1,2,3,4,5,6,7,8,9];
  constructor() {

  }

  ngOnInit(): void {
    let locat = [17.426996, 78.341224];
    let map = L.map('map').setView(locat, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);
    var greenIcon = L.icon({
      iconUrl: '../../assets/R.png',
      // shadowUrl: '../../assets/R.png',

      iconSize: [95, 35], // size of the icon
      shadowSize: [95, 35], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: locat, // point from which the popup should open relative to the iconAnchor
    });
    var marker = L.marker(locat,{icon:greenIcon}).addTo(map);
    var latlngs = [
      [17.426996, 78.341224],
      [17.426013, 78.340666],
      [17.425696, 78.340150],
      [17.425692, 78.339697],
      [17.426814, 78.335755],
      [17.426953, 78.333975],
      [17.426636, 78.330582],
      [17.427099, 78.329105],
      [17.428933, 78.326095],
      [17.430687, 78.323366],
      [17.430687, 78.323366],
      [17.436770, 78.317807],
      [17.438747, 78.315692],

  ];
  
  var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
    console.log(L, '===========================');
  }
}
