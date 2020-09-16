import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookVehicleComponent } from './booking/book-vehicle/book-vehicle.component';

const routes: Routes = [
  { path:'home' , redirectTo:''},
  { path:'booking' , component:BookVehicleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
