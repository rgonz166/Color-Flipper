import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HexComponent } from './components/hex/hex.component';
import { RgbComponent } from './components/rgb/rgb.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'hex', component: HexComponent },
  {path: 'rgb', component: RgbComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'} // redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
