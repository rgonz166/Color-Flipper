import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HexComponent } from './components/hex/hex.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RgbComponent } from './components/rgb/rgb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HexComponent,
    NavbarComponent,
    RgbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
