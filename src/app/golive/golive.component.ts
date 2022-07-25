import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-golive',
  templateUrl: './golive.component.html',
  styleUrls: ['./golive.component.css'],
})
export class GoliveComponent implements OnInit {
  id: any;
  constructor() {}

  ngOnInit(): void {}
  shareLocation() {
    if (!navigator.geolocation) {
      console.log('your device is no support gioLocation');
    }
    this.id = navigator.geolocation.getCurrentPosition((position) => {
      console.log(
        'lat: ',
        position.coords.latitude,
        'lon: ',
        position.coords.longitude
      );
    });
    this.watchPosition();
  }

  watchPosition() {
    navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          'lat: ',
          position.coords.latitude,
          'lon: ',
          position.coords.longitude
        );
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
  stopShareLocation() {
    navigator.geolocation.clearWatch(this.id)
    console.log(this.id);
  }
}
