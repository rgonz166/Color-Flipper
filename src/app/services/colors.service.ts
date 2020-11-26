import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  nameColor = 'LightGray';
  rgbColor = 'rgb(211,211,211)';
  hexColor = '#D3D3D3';

  hexMap = new Map();

  hex = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 'A', 'B', 'C', 'D', 'E', 'F'];

  colors = [
    {name: 'AliceBlue', rgb: 'rgb(240,248,255)', hex: '#f0f8ff'},
    {name: 'AntiqueWhite', rgb: 'rgb(98,92,84)', hex: '#faebd7' },
    {name: 'Aqua', rgb: 'rgb(0,255,255)', hex: '#00ffff' },
    {name: 'Aquamarine', rgb: 'rgb(127,255,212)', hex: '#7fffd4' },
    {name: 'Azure', rgb: 'rgb(240,255,255)', hex: '#f0ffff' },
    {name: 'Beige', rgb: 'rgb(245,245,220)', hex: '#f5f5dc' },
    {name: 'Bisque', rgb: 'rgb(255,228,196)', hex: '#ffe4c4' },
    {name: 'Black', rgb: 'rgb(0,0,0)', hex: '#000000' },
    {name: 'BlanchedAlmond', rgb: 'rgb(255,235,205)', hex: '#ffebcd' },
    {name: 'Blue', rgb: 'rgb(0,0,255)', hex: '#0000ff' },
    {name: 'BlueViolet', rgb: 'rgb(138,43,226)', hex: '#8a2be2' },
    {name: 'Brown', rgb: 'rgb(165,42,42)', hex: '#A52A2A' },
    {name: 'BurlyWood', rgb: 'rgb(222,184,135)', hex: '#deb887' },
    {name: 'CadetBlue', rgb: 'rgb(95,158,160)', hex: '#5f9ea0' },
    {name: 'Chartreuse', rgb: 'rgb(127,255,0)', hex: '#7fff00' },
    {name: 'Chocolate', rgb: 'rgb(210,105,30)', hex: '#D2691E' },
    {name: 'Coral', rgb: 'rgb(248,131,121)', hex: '#f88379' },
    {name: 'CornflowerBlue', rgb: 'rgb(100,149,237)', hex: '#6495ed' },
    {name: 'Cornsilk', rgb: 'rgb(255,248,220)', hex: '#fff8dc' },
    {name: 'Crimson', rgb: 'rgb(220,20,60)', hex: '#DC143C' },
    {name: 'Cyan', rgb: 'rgb(0,255,255)', hex: '#00ffff' },
    {name: 'DarkBlue', rgb: 'rgb(0,0,139)', hex: '#00008B' },
    {name: 'DarkCyan', rgb: 'rgb(0,139,139)', hex: '#008b8b' },
    {name: 'DarkGoldenRod', rgb: 'rgb(184,134,11)', hex: '#b8860b' },
    {name: 'DarkGray', rgb: 'rgb(169,169,169)', hex: '#a9a9a9' },
    {name: 'DarkGrey', rgb: 'rgb(169,169,169)', hex: '#a9a9a9' },
    {name: 'DarkGreen', rgb: 'rgb(0,100,0)', hex: '#006400' },
    {name: 'DarkKhaki', rgb: 'rgb(189,183,107)', hex: '#bdb76b' },
    {name: 'DarkMagenta', rgb: 'rgb(139,0,139)', hex: '#8b008b' },
    {name: 'DarkOliveGreen', rgb: 'rgb(85,107,47)', hex: '#556b2f' },
    {name: 'DarkOrange', rgb: 'rgb(255,140,0)', hex: '#ff8c00' },
    {name: 'DarkOrchid', rgb: 'rgb(153,50,204)', hex: '#9932cc' },
    {name: 'DarkRed', rgb: 'rgb(139,0,0)', hex: '#8B0000' },
    {name: 'DarkSalmon', rgb: 'rgb(233,150,122)', hex: '#e9967a' },
    {name: 'DarkSeaGreen', rgb: 'rgb(143,188,143)', hex: '#8fbc8f' },
    {name: 'DarkSlateBlue', rgb: 'rgb(72,61,139)', hex: '#483d8b' },
    {name: 'DarkSlateGray', rgb: 'rgb(47,79,79)', hex: '#2f4f4f' },
    {name: 'DarkSlateGrey', rgb: 'rgb(47,79,79)', hex: '#2f4f4f' },
    {name: 'DarkTurquoise', rgb: 'rgb(0,206,209)', hex: '#00ced1' },
    {name: 'DarkViolet', rgb: 'rgb(148,0,211)', hex: '#9400d3' },
    {name: 'DeepPink', rgb: 'rgb(255,20,147)', hex: '#ff1493' },
    {name: 'DeepSkyBlue', rgb: 'rgb(0,191,255)', hex: '#00bfff' },
    {name: 'DimGray', rgb: 'rgb(105,105,105)', hex: '#696969' },
    {name: 'DimGrey', rgb: 'rgb(105,105,105)', hex: '#696969' },
    {name: 'DodgerBlue', rgb: 'rgb(30,144,255)', hex: '#1e90ff' },
    {name: 'FireBrick', rgb: 'rgb(178,34,34)', hex: '#B22222' },
    {name: 'FloralWhite', rgb: 'rgb(178,34,34)', hex: '#b22222' },
    {name: 'ForestGreen', rgb: 'rgb(34,139,34)', hex: '#228b22' },
    {name: 'Fuchsia', rgb: 'rgb(255,0,255)', hex: '#ff00ff' },
    {name: 'Gainsboro', rgb: 'rgb(220,220,220)', hex: '#dcdcdc' },
    {name: 'GhostWhite', rgb: 'rgb(248,248,255)', hex: '#f8f8ff' },
    {name: 'Gold', rgb: 'rgb(255,215,0)', hex: '#ffd700' },
    {name: 'GoldenRod', rgb: 'rgb(218,165,32)', hex: '#daa520' },
    {name: 'Gray', rgb: 'rgb(128,128,128)', hex: '#808080' },
    {name: 'Grey', rgb: 'rgb(128,128,128)', hex: '#808080' },
    {name: 'Green', rgb: 'rgb(0,128,0)', hex: '#008000' },
    {name: 'GreenYellow', rgb: 'rgb(173,255,47)', hex: '#adff2f' },
    {name: 'HoneyDew', rgb: 'rgb(240,255,240)', hex: '#f0fff0' },
    {name: 'HotPink', rgb: 'rgb(255,105,180)', hex: '#ff69b4' },
    {name: 'IndianRed', rgb: 'rgb(205,92,92)', hex: '#cd5c5c' },
    {name: 'Indigo', rgb: 'rgb(75,0,130)', hex: '#4b0082' },
    {name: 'Ivory', rgb: 'rgb(255,255,240)', hex: '#fffff0' },
    {name: 'Khaki', rgb: 'rgb(240,230,140)', hex: '#f0e68c' },
    {name: 'Lavender', rgb: 'rgb(230,230,250)', hex: '#e6e6fa' },
    {name: 'LavenderBlush', rgb: 'rgb(255,240,245)', hex: '#fff0f5' },
    {name: 'LawnGreen', rgb: 'rgb(124,252,0)', hex: '#7cfc00' },
    {name: 'LemonChiffon', rgb: 'rgb(255,250,205)', hex: '#fffacd' },
    {name: 'LightBlue', rgb: 'rgb(173,216,230)', hex: '#add8e6' },
    {name: 'LightCoral', rgb: 'rgb(240,128,128)', hex: '#f08080' },
    {name: 'LightCyan', rgb: 'rgb(224,255,255)', hex: '#e0ffff' },
    {name: 'LightGoldenRodYellow', rgb: 'rgb(250,250,210)', hex: '#fafad2' },
    {name: 'LightGray', rgb: 'rgb(211,211,211)', hex: '#D3D3D3' },
    {name: 'LightGrey', rgb: 'rgb(211,211,211)', hex: '#D3D3D3' },
    {name: 'LightGreen', rgb: 'rgb(144,238,144)', hex: '#90ee90' },
    {name: 'LightPink', rgb: 'rgb(255,182,193)', hex: '#ffb6c1' },
    {name: 'LightSalmon', rgb: 'rgb(255,160,122)', hex: '#ffa07a' },
    {name: 'LightSeaGreen', rgb: 'rgb(32,178,170)', hex: '#20b2aa' },
    {name: 'LightSkyBlue', rgb: 'rgb(135,206,250)', hex: '#87cefa' },
    {name: 'LightSlateGray', rgb: 'rgb(119,136,153)', hex: '#778899' },
    {name: 'LightSlateGrey', rgb: 'rgb(119,136,153)', hex: '#778899' },
    {name: 'LightSteelBlue', rgb: 'rgb(176,196,222)', hex: '#b0c4de' },
    {name: 'LightYellow', rgb: 'rgb(255,255,224)', hex: '#ffffe0' },
    {name: 'Lime', rgb: 'rgb(0,255,0)', hex: '#00FF00' },
    {name: 'LimeGreen', rgb: 'rgb(50,205,50)', hex: '#32cd32' },
    {name: 'Linen', rgb: 'rgb(250,240,230)', hex: '#faf0e6' },
    {name: 'Magenta', rgb: 'rgb(255,0,255)', hex: '#ff00ff' },
    {name: 'Maroon', rgb: 'rgb(128,0,0)', hex: '#800000' },
    {name: 'MediumAquamarine', rgb: 'rgb(102,205,170)', hex: '#66cdaa' },
    {name: 'MediumBlue', rgb: 'rgb(0,0,205)', hex: '#0000CD' },
    {name: 'MediumOrchid', rgb: 'rgb(186,85,211)', hex: '#ba55d3' },
    {name: 'MediumPurple', rgb: 'rgb(147,112,219)', hex: '#9370db' },
    {name: 'MediumSeaGreen', rgb: 'rgb(60,179,113)', hex: '#3cb371' },
    {name: 'MediumSlateBlue', rgb: 'rgb(123,104,238)', hex: '#7b68ee' },
    {name: 'MediumSpringGreen', rgb: 'rgb(0,250,154)', hex: '#00fa9a' },
    {name: 'MediumTurquoise', rgb: 'rgb(72,209,204)', hex: '#48d1cc' },
    {name: 'MediumVioletRed', rgb: 'rgb(199,21,133)', hex: '#c71585' },
    {name: 'MidnightBlue', rgb: 'rgb(25,25,112)', hex: '#191970' },
    {name: 'MintCream', rgb: 'rgb(245,255,250)', hex: '#f5fffa' },
    {name: 'MistyRose', rgb: 'rgb(255,228,225)', hex: '#ffe4e1' },
    {name: 'Moccasin', rgb: 'rgb(98,92,84)', hex: '#faebd7' },
    {name: 'NavajoWhite', rgb: 'rgb(255,222,173)', hex: '#ffdead' },
    {name: 'Navy', rgb: 'rgb(0,0,128)', hex: '#000080' },
    {name: 'OldLace', rgb: 'rgb(253,245,230)', hex: '#fdf5e6' },
    {name: 'Olive', rgb: 'rgb(128,128,0)', hex: '#808000' },
    {name: 'OliveDrab', rgb: 'rgb(107,142,35)', hex: '#6b8e23' },
    {name: 'Orange', rgb: 'rgb(255,165,0)', hex: '#ffa500' },
    {name: 'OrangeRed', rgb: 'rgb(255,69,0)', hex: '#ff4500' },
    {name: 'Orchid', rgb: 'rgb(218,112,214)', hex: '#da70d6' },
    {name: 'PaleGoldenRod', rgb: 'rgb(238,232,170)', hex: '#eee8aa' },
    {name: 'PaleGreen', rgb: 'rgb(152,251,152)', hex: '#98fb98' },
    {name: 'PaleTurquoise', rgb: 'rgb(175,238,238)', hex: '#afeeee' },
    {name: 'PaleVioletRed', rgb: 'rgb(219,112,147)', hex: '#db7093' },
    {name: 'PapayaWhip', rgb: 'rgb(255,239,213)', hex: '#ffefd5' },
    {name: 'PeachPuff', rgb: 'rgb(255,218,185)', hex: '#ffdab9' },
    {name: 'Peru', rgb: 'rgb(205,133,63)', hex: '#cd853f' },
    {name: 'Pink', rgb: 'rgb(255,192,203)', hex: '#ffc0cb' },
    {name: 'Plum', rgb: 'rgb(221,160,221)', hex: '#dda0dd' },
    {name: 'PowderBlue', rgb: 'rgb(176,224,230)', hex: '#b0e0e6' },
    {name: 'Purple', rgb: 'rgb(128,0,128)', hex: '#800080' },
    {name: 'RebeccaPurple', rgb: 'rgb(102,51,153)', hex: '#663399' },
    {name: 'Red', rgb: 'rgb(255,0,0)', hex: '#FF0000' },
    {name: 'RosyBrown', rgb: 'rgb(188,143,143)', hex: '#bc8f8f' },
    {name: 'RoyalBlue', rgb: 'rgb(65,105,225)', hex: '#4169E1' },
    {name: 'SaddleBrown', rgb: 'rgb(139,69,19)', hex: '#8B4513' },
    {name: 'Salmon', rgb: 'rgb(250,128,114)', hex: '#fa8072' },
    {name: 'SandyBrown', rgb: 'rgb(244,164,96)', hex: '#f4a460' },
    {name: 'SeaGreen', rgb: 'rgb(46,139,87)', hex: '#2e8b57' },
    {name: 'Seashell', rgb: 'rgb(255,245,238)', hex: '#fff5ee' },
    {name: 'Sienna', rgb: 'rgb(160,82,45)', hex: '#A0522D' },
    {name: 'Silver', rgb: 'rgb(192,192,192)', hex: '#C0C0C0' },
    {name: 'SkyBlue', rgb: 'rgb(135,206,235)', hex: '#87ceeb' },
    {name: 'SlateBlue', rgb: 'rgb(106,90,205)', hex: '#6a5acd' },
    {name: 'SlateGray', rgb: 'rgb(112,128,144)', hex: '#708090' },
    {name: 'SlateGrey', rgb: 'rgb(112,128,144)', hex: '#708090' },
    {name: 'Snow', rgb: 'rgb(255,250,250)', hex: '#fffafa' },
    {name: 'SpringGreen', rgb: 'rgb(0,255,127)', hex: '#00ff7f' },
    {name: 'SteelBlue', rgb: 'rgb(70,130,180)', hex: '#4682b4' },
    {name: 'Tan', rgb: 'rgb(210,180,140)', hex: '#d2b48c' },
    {name: 'Teal', rgb: 'rgb(0,128,128)', hex: '#008080' },
    {name: 'Thistle', rgb: 'rgb(216,191,216)', hex: '#d8bfd8' },
    {name: 'Tomato', rgb: 'rgb(255,99,71)', hex: '#FF6347' },
    {name: 'Turquoise', rgb: 'rgb(64,224,208)', hex: '#40e0d0' },
    {name: 'Violet', rgb: 'rgb(238,130,238)', hex: '#ee82ee' },
    {name: 'Wheat', rgb: 'rgb(245,222,179)', hex: '#f5deb3' },
    {name: 'White', rgb: 'rgb(255,255,255)', hex: '#ffffff' },
    {name: 'WhiteSmoke', rgb: 'rgb(245,245,245)', hex: '#f5f5f5' },
    {name: 'Yellow', rgb: 'rgb(255,255,0)', hex: '#FFFF00' },
    {name: 'YellowGreen', rgb: 'rgb(154,205,50)', hex: '#9acd32' },
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
    const index = this.getRandomNumber(this.colors);
    this.nameColor = this.colors[index].name;
    this.rgbColor = this.colors[index].rgb;
    this.hexColor = this.colors[index].hex;
  }

  getDefault(): string {
    this.getColor();
    return this.nameColor;
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
