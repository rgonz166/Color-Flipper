import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentBgColor;

  constructor(private colorService: ColorsService) { }

  ngOnInit(): void {
    this.currentBgColor = this.colorService.defaultColor;
  }

  clickedButton() {
    this.currentBgColor = this.colorService.getDefault();
  }

}
