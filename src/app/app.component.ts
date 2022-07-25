import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { GoliveComponent } from './golive/golive.component';
import { TrackBusComponent } from './track-bus/track-bus.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zbus';
}
