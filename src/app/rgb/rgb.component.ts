import { Component } from '@angular/core';

@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.component.html',
  styleUrls: ['./rgb.component.css']
})
export class RgbComponent  {

  currentBgColor = 'RGB(211,211,211)';

  constructor() { }

  clickButton() {
    let rgbColor = 'RGB(';
    for (let i = 0; i < 3; i++ ) {
      rgbColor += this.getRandomNumber();
      if ( i !== 2 ) {
        rgbColor += ',';
      }
    }
    rgbColor += ')';
    this.currentBgColor = rgbColor;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 256);
  }

}
