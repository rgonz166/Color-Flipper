import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-hex',
  templateUrl: './hex.component.html',
  styleUrls: ['./hex.component.css']
})
export class HexComponent implements OnInit {

  currentBgColor;

  constructor(private colorService: ColorsService) { }

  ngOnInit(): void {
    this.currentBgColor = this.colorService.hexColor;
  }

  clickButton() {
    this.currentBgColor = this.colorService.getHex();
  }

}
