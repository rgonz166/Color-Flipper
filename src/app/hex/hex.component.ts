import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hex',
  templateUrl: './hex.component.html',
  styleUrls: ['./hex.component.css']
})
export class HexComponent implements OnInit {

  hex = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  currentBgColor = '#F1F5F8';

  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += this.hex[this.getRandomNumber()];
    }
    this.currentBgColor = hexColor;
  }

  getRandomNumber() {
    return Math.floor(Math.random() * this.hex.length);
  }

}
