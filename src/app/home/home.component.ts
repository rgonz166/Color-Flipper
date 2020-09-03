import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colors = ['green', 'red', 'rgb(133,122,200)', '#f15025'];
  currentBgColor = '#f1f5f8';

  constructor() { }

  ngOnInit(): void {
  }

  clickedButton() {
    this.currentBgColor = this.colors[this.getRandomNumber()];
  }

  getRandomNumber() {
    return Math.floor(Math.random() * this.colors.length);
  }

}
