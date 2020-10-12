import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  defaultColor = 'LightGray';
  rgbColor = 'rgb(211, 211, 211)';
  hexColor = '#D3D3D3';

  hexMap = new Map();

  hex = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  defaultColors = [
    {default: 'AliceBlue', rgb: 'rgb(240, 248, 255)', hex: '#f0f8ff'},
    {default: 'AntiqueWhite', rgb: 'rgb(98, 92, 84)', hex: '#faebd7' },
    {default: 'Aqua', rgb: 'rgb(0, 255, 255)', hex: '#00ffff' },
    {default: 'Aquamarine', rgb: 'rgb(127, 255, 212)', hex: '#7fffd4' },
    {default: 'Azure', rgb: 'rgb(240, 255, 255)', hex: '#f0ffff' },
    {default: 'Beige', rgb: 'rgb(245, 245, 220)', hex: '#f5f5dc' },
    {default: 'Bisque', rgb: 'rgb(255, 228, 196)', hex: '#ffe4c4' },
    {default: 'Black', rgb: 'rgb(0, 0, 0)', hex: '#000000' },
    {default: 'BlanchedAlmond', rgb: 'rgb(255, 235, 205)', hex: '#ffebcd' },
    {default: 'Blue', rgb: 'rgb(0, 0, 255)', hex: '#0000ff' },
    {default: 'BlueViolet', rgb: 'rgb(138,43,226)', hex: '#8a2be2' },
    {default: 'Brown', rgb: 'rgb(165,42,42)', hex: '#A52A2A' },
    {default: 'BurlyWood', rgb: 'rgb(222, 184, 135)', hex: '#deb887' },
    {default: 'CadetBlue', rgb: 'rgb(95, 158, 160)', hex: '#5f9ea0' },
    {default: 'Chartreuse', rgb: 'rgb(127, 255, 0)', hex: '#7fff00' },
    {default: 'Chocolate', rgb: 'rgb(210,105,30)', hex: '#D2691E' },
    {default: 'Coral', rgb: 'rgb(248, 131, 121)', hex: '#f88379' },
    {default: 'CornflowerBlue', rgb: 'rgb(100, 149, 237)', hex: '#6495ed' },
    {default: 'Cornsilk', rgb: 'rgb()', hex: '#' },
    {default: 'Crimson', rgb: 'rgb(220,20,60)', hex: '#DC143C' },
    {default: 'Cyan', rgb: 'rgb(0, 255, 255)', hex: '#00ffff' },
    {default: 'DarkBlue', rgb: 'rgb(0,0,139)', hex: '#00008B' },
    {default: 'DarkCyan', rgb: 'rgb()', hex: '#' },
    {default: 'DarkGoldenRod', rgb: 'rgb()', hex: '#' },
    {default: 'DarkGray', rgb: 'rgb()', hex: '#' },
    {default: 'DarkGrey', rgb: 'rgb()', hex: '#' },
    {default: 'DarkGreen', rgb: 'rgb()', hex: '#' },
    {default: 'DarkKhaki', rgb: 'rgb()', hex: '#' },
    {default: 'DarkMagenta', rgb: 'rgb()', hex: '#' },
    {default: 'DarkOliveGreen', rgb: 'rgb()', hex: '#' },
    {default: 'DarkOrange', rgb: 'rgb()', hex: '#' },
    {default: 'DarkOrchid', rgb: 'rgb()', hex: '#' },
    {default: 'DarkRed', rgb: 'rgb(139,0,0)', hex: '#8B0000' },
    {default: 'DarkSalmon', rgb: 'rgb()', hex: '#' },
    {default: 'DarkSeaGreen', rgb: 'rgb()', hex: '#' },
    {default: 'DarkSlateBlue', rgb: 'rgb(72, 61, 139)', hex: '#483d8b' },
    {default: 'DarkSlateGray', rgb: 'rgb()', hex: '#' },
    {default: 'DarkSlateGrey', rgb: 'rgb()', hex: '#' },
    {default: 'DarkTurquoise', rgb: 'rgb()', hex: '#' },
    {default: 'DarkViolet', rgb: 'rgb()', hex: '#' },
    {default: 'DeepPink', rgb: 'rgb()', hex: '#' },
    {default: 'DeepSkyBlue', rgb: 'rgb()', hex: '#' },
    {default: 'DimGray', rgb: 'rgb()', hex: '#' },
    {default: 'DimGrey', rgb: 'rgb()', hex: '#' },
    {default: 'DodgerBlue', rgb: 'rgb()', hex: '#' },
    {default: 'FireBrick', rgb: 'rgb(178,34,34)', hex: '#B22222' },
    {default: 'FloralWhite', rgb: 'rgb()', hex: '#' },
    {default: 'ForestGreen', rgb: 'rgb()', hex: '#' },
    {default: 'Fuchsia', rgb: 'rgb()', hex: '#' },
    {default: 'Gainsboro', rgb: 'rgb()', hex: '#' },
    {default: 'GhostWhite', rgb: 'rgb()', hex: '#' },
    {default: 'Gold', rgb: 'rgb()', hex: '#' },
    {default: 'GoldenRod', rgb: 'rgb()', hex: '#' },
    {default: 'Gray', rgb: 'rgb(128,128,128)', hex: '#808080' },
    {default: 'Grey', rgb: 'rgb(128,128,128)', hex: '#808080' },
    {default: 'Green', rgb: 'rgb(0,128,0)', hex: '#008000' },
    {default: 'GreenYellow', rgb: 'rgb()', hex: '#' },
    {default: 'HoneyDew', rgb: 'rgb(240, 255, 240)', hex: '#f0fff0' },
    {default: 'HotPink', rgb: 'rgb()', hex: '#' },
    {default: 'IndianRed', rgb: 'rgb()', hex: '#' },
    {default: 'Indigo', rgb: 'rgb()', hex: '#' },
    {default: 'Ivory', rgb: 'rgb()', hex: '#' },
    {default: 'Khaki', rgb: 'rgb(240, 230, 140)', hex: '#f0e68c' },
    {default: 'Lavender', rgb: 'rgb()', hex: '#' },
    {default: 'LavenderBlush', rgb: 'rgb()', hex: '#' },
    {default: 'LawnGreen', rgb: 'rgb()', hex: '#' },
    {default: 'LemonChiffon', rgb: 'rgb()', hex: '#' },
    {default: 'LightBlue', rgb: 'rgb()', hex: '#' },
    {default: 'LightCoral', rgb: 'rgb()', hex: '#' },
    {default: 'LightCyan', rgb: 'rgb()', hex: '#' },
    {default: 'LightGoldenRodYellow', rgb: 'rgb()', hex: '#' },
    {default: 'LightGray', rgb: 'rgb(211, 211, 211)', hex: '#D3D3D3' },
    {default: 'LightGrey', rgb: 'rgb(211, 211, 211)', hex: '#D3D3D3' },
    {default: 'LightGreen', rgb: 'rgb()', hex: '#' },
    {default: 'LightPink', rgb: 'rgb()', hex: '#' },
    {default: 'LightSalmon', rgb: 'rgb()', hex: '#' },
    {default: 'LightSeaGreen', rgb: 'rgb()', hex: '#' },
    {default: 'LightSkyBlue', rgb: 'rgb()', hex: '#' },
    {default: 'LightSlateGray', rgb: 'rgb()', hex: '#' },
    {default: 'LightSlateGrey', rgb: 'rgb()', hex: '#' },
    {default: 'LightSteelBlue', rgb: 'rgb()', hex: '#' },
    {default: 'LightYellow', rgb: 'rgb()', hex: '#' },
    {default: 'Lime', rgb: 'rgb(0,255,0)', hex: '#00FF00' },
    {default: 'LimeGreen', rgb: 'rgb()', hex: '#' },
    {default: 'Linen', rgb: 'rgb()', hex: '#' },
    {default: 'Magenta', rgb: 'rgb(255, 0, 255)', hex: '#ff00ff' },
    {default: 'Maroon', rgb: 'rgb(128,0,0)', hex: '#800000' },
    {default: 'MediumAquaMarine', rgb: 'rgb()', hex: '#' },
    {default: 'MediumBlue', rgb: 'rgb(0,0,205)', hex: '#0000CD' },
    {default: 'MediumOrchid', rgb: 'rgb()', hex: '#' },
    {default: 'MediumPurple', rgb: 'rgb()', hex: '#' },
    {default: 'MediumSeaGreen', rgb: 'rgb(60, 179, 113)', hex: '#3cb371' },
    {default: 'MediumSlateBlue', rgb: 'rgb()', hex: '#' },
    {default: 'MediumSpringGreen', rgb: 'rgb()', hex: '#' },
    {default: 'MediumTurquoise', rgb: 'rgb()', hex: '#' },
    {default: 'MediumVioletRed', rgb: 'rgb()', hex: '#' },
    {default: 'MidnightBlue', rgb: 'rgb()', hex: '#' },
    {default: 'MintCream', rgb: 'rgb()', hex: '#' },
    {default: 'MistyRose', rgb: 'rgb()', hex: '#' },
    {default: 'Moccasin', rgb: 'rgb(98, 92, 84)', hex: '#faebd7' },
    {default: 'NavajoWhite', rgb: 'rgb()', hex: '#' },
    {default: 'Navy', rgb: 'rgb(0,0,128)', hex: '#000080' },
    {default: 'OldLace', rgb: 'rgb(253, 245, 230)', hex: '#fdf5e6' },
    {default: 'Olive', rgb: 'rgb(128,128,0)', hex: '#808000' },
    {default: 'OliveDrab', rgb: 'rgb()', hex: '#' },
    {default: 'Orange', rgb: 'rgb()', hex: '#' },
    {default: 'OrangeRed', rgb: 'rgb()', hex: '#' },
    {default: 'Orchid', rgb: 'rgb()', hex: '#' },
    {default: 'PaleGoldenRod', rgb: 'rgb()', hex: '#' },
    {default: 'PaleGreen', rgb: 'rgb()', hex: '#' },
    {default: 'PaleTurquoise', rgb: 'rgb()', hex: '#' },
    {default: 'PaleVioletRed', rgb: 'rgb()', hex: '#' },
    {default: 'PapayaWhip', rgb: 'rgb()', hex: '#' },
    {default: 'PeachPuff', rgb: 'rgb()', hex: '#' },
    {default: 'Peru', rgb: 'rgb()', hex: '#' },
    {default: 'Pink', rgb: 'rgb()', hex: '#' },
    {default: 'Plum', rgb: 'rgb()', hex: '#' },
    {default: 'PowderBlue', rgb: 'rgb()', hex: '#' },
    {default: 'Purple', rgb: 'rgb(128,0,128)', hex: '#800080' },
    {default: 'RebeccaPurple', rgb: 'rgb()', hex: '#' },
    {default: 'Red', rgb: 'rgb(255,0,0)', hex: '#FF0000' },
    {default: 'RosyBrown', rgb: 'rgb()', hex: '#' },
    {default: 'RoyalBlue', rgb: 'rgb(65,105,225)', hex: '#4169E1' },
    {default: 'SaddleBrown', rgb: 'rgb(139,69,19)', hex: '#8B4513' },
    {default: 'Salmon', rgb: 'rgb()', hex: '#' },
    {default: 'SandyBrown', rgb: 'rgb()', hex: '#' },
    {default: 'SeaGreen', rgb: 'rgb()', hex: '#' },
    {default: 'SeaShell', rgb: 'rgb()', hex: '#' },
    {default: 'Sienna', rgb: 'rgb(160,82,45)', hex: '#A0522D' },
    {default: 'Silver', rgb: 'rgb(192,192,192)', hex: '#C0C0C0' },
    {default: 'SkyBlue', rgb: 'rgb()', hex: '#' },
    {default: 'SlateBlue', rgb: 'rgb()', hex: '#' },
    {default: 'SlateGray', rgb: 'rgb()', hex: '#' },
    {default: 'SlateGrey', rgb: 'rgb()', hex: '#' },
    {default: 'Snow', rgb: 'rgb()', hex: '#' },
    {default: 'SpringGreen', rgb: 'rgb()', hex: '#' },
    {default: 'SteelBlue', rgb: 'rgb()', hex: '#' },
    {default: 'Tan', rgb: 'rgb()', hex: '#' },
    {default: 'Teal', rgb: 'rgb(0,128,128)', hex: '#008080' },
    {default: 'Thistle', rgb: 'rgb()', hex: '#' },
    {default: 'Tomato', rgb: 'rgb(255,99,71)', hex: '#FF6347' },
    {default: 'Turquoise', rgb: 'rgb()', hex: '#' },
    {default: 'Violet', rgb: 'rgb()', hex: '#' },
    {default: 'Wheat', rgb: 'rgb()', hex: '#' },
    {default: 'White', rgb: 'rgb(255, 255, 255)', hex: '#ffffff' },
    {default: 'WhiteSmoke', rgb: 'rgb()', hex: '#' },
    {default: 'Yellow', rgb: 'rgb(255,255,0)', hex: '#FFFF00' },
    {default: 'YellowGreen', rgb: 'rgb()', hex: '#' },
  ];

  constructor() {
    for (const [i, v] of this.hex.entries()) {
      this.hexMap.set(v, i + 1);
    }
  }

  getRandomNumber(val: any) {
    if (isNaN(val)) {
      return Math.floor(Math.random() * val.length);
    } else {
      return Math.floor(Math.random() * val);
    }
  }


  private getColor() {
    const index = this.getRandomNumber(this.defaultColors);
    this.defaultColor = this.defaultColors[index].default;
    this.rgbColor = this.defaultColors[index].rgb;
    this.hexColor = this.defaultColors[index].hex;
  }

  getDefault(): string {
    this.getColor();
    return this.defaultColor;
  }

  getRgb(): string {
    this.getColor();
    return this.rgbColor;
  }

  getHex(): string {
    this.getColor();
    return this.hexColor;
  }

}
