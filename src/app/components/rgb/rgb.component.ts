import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.component.html',
  styleUrls: ['./rgb.component.css']
})
export class RgbComponent implements OnInit {

  currentBgColor = 'RGB(211,211,211)';

  constructor(private colorService: ColorsService) { }
  ngOnInit(): void {
    this.currentBgColor = this.colorService.rgbColor;
  }

  clickButton() {
    this.currentBgColor = this.colorService.getRgb();
  }

}
