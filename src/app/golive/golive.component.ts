import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import{LoginComponent} from '../login/login.component'
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-golive',
  templateUrl: './golive.component.html',
  styleUrls: ['./golive.component.css'],
})
export class GoliveComponent implements OnInit {
  id: any;
  isLogin:boolean=false;
  constructor(private locationService:LocationService,private userAuthentication:SubjectService) {}

  ngOnInit(): void {
    this.userAuthentication.userAuth.subscribe((result)=>{
      this.isLogin=result
    })
  }
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
        this.locationService.postlocation({"cord":[position.coords.latitude, position.coords.longitude]}).subscribe((result)=>{
          console.warn(result)
        })
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 600000,
        maximumAge: 0,
      }
    );
  }
  stopShareLocation() {
    navigator.geolocation.clearWatch(this.id)
    console.log(this.id);
  }
}
