import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { GoliveComponent } from './golive/golive.component';
import { TrackBusComponent } from './track-bus/track-bus.component';


const routes: Routes = [
  {path:'', component: BodyComponent},
  {path:'golive', component: GoliveComponent},
  {path:'trackBus', component: TrackBusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[GoliveComponent,TrackBusComponent]
