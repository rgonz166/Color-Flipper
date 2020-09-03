import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HexComponent } from './hex/hex.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hex', component: HexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
