import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catan-board-generator',
  templateUrl: './catan-board-generator.component.html',
  styleUrls: ['./catan-board-generator.component.css']
})
export class CatanBoardGeneratorComponent implements OnInit {

  @Output() newGameEvent = new EventEmitter<string>();

  board_numbers = ['2', '3', '3', '4', '4', '5', '5', '6', '6', '8', '8', '9', '9', '10', '10', '11', '11', '12', ''];
  resources = ['Wood','Wood','Wood','Wood','Wheat','Wheat','Wheat','Wheat','Sheep','Sheep','Sheep','Sheep','Brick','Brick','Brick','Ore','Ore','Ore'];
  hex1_number: any;
  hex2_number: any;
  hex3_number: any;
  hex4_number: any;
  hex5_number: any;
  hex6_number: any;
  hex7_number: any;
  hex8_number: any;
  hex9_number: any;
  hex10_number: any;
  hex11_number: any;
  hex12_number: any;
  hex13_number: any;
  hex14_number: any;
  hex15_number: any;
  hex16_number: any;
  hex17_number: any;
  hex18_number: any;
  hex19_number: any;
  hex1_prob: any;
  hex2_prob: any;
  hex3_prob: any;
  hex4_prob: any;
  hex5_prob: any;
  hex6_prob: any;
  hex7_prob: any;
  hex8_prob: any;
  hex9_prob: any;
  hex10_prob: any;
  hex11_prob: any;
  hex12_prob: any;
  hex13_prob: any;
  hex14_prob: any;
  hex15_prob: any;
  hex16_prob: any;
  hex17_prob: any;
  hex18_prob: any;
  hex19_prob: any;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
      this.resetHexColors();
      this.setResourcedHexOutline();

      var hex_index = 0;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex1_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex1_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex2_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex2_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex3_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex3_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex4_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex4_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex5_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex5_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex6_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex6_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex7_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex7_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex8_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex8_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex9_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex9_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex10_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex10_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex11_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex11_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex12_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex12_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex13_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex13_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex14_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex14_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex15_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex15_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex16_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex16_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex17_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex17_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex18_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex18_prob = this.getHexProbabilty(number, hex_index);

      hex_index++;
      var i = Math.floor(Math.random() * this.board_numbers.length);
      var number = this.board_numbers[i];
      this.hex19_number = number;
      this.board_numbers.splice(i, 1);
      this.setHexResource(number, hex_index);
      this.hex19_prob = this.getHexProbabilty(number, hex_index);

      this.board_numbers = ['2', '3', '3', '4', '4', '5', '5', '6', '6', '8', '8', '9', '9', '10', '10', '11', '11', '12', ''];
      this.resources = ['Wood','Wood','Wood','Wood','Wheat','Wheat','Wheat','Wheat','Sheep','Sheep','Sheep','Sheep','Brick','Brick','Brick','Ore','Ore','Ore'];

  }

  setHexResource(number: any, index: any) {
    if (number == '') {
      this.setDesertHex(index);
    } else {
      this.setTangibleResources(index);
    }
  }

  getHexProbabilty(number: any, index: any) {
    if (number == '2' || number == '12') {
      document.getElementsByClassName("token-text")[index].setAttribute("style", "color: black");
      document.getElementsByClassName("token-prob")[index].setAttribute("style", "color: black");
      return this.decode('&#8226;');
    } else if (number == '3' || number == '11') {
      document.getElementsByClassName("token-text")[index].setAttribute("style", "color: black");
      document.getElementsByClassName("token-prob")[index].setAttribute("style", "color: black");
      return this.decode('&#8226;&#8226;');
    } else if (number == '4' || number == '10') {
      document.getElementsByClassName("token-text")[index].setAttribute("style", "color: black");
      document.getElementsByClassName("token-prob")[index].setAttribute("style", "color: black");
      return this.decode('&#8226;&#8226;&#8226;');
    } else if (number == '5' || number == '9') {
      document.getElementsByClassName("token-text")[index].setAttribute("style", "color: black");
      document.getElementsByClassName("token-prob")[index].setAttribute("style", "color: black");
      return this.decode('&#8226;&#8226;&#8226;&#8226;');
    } else if (number == '6' || number == '8') {
      document.getElementsByClassName("token-text")[index].setAttribute("style", "color: red");
      document.getElementsByClassName("token-prob")[index].setAttribute("style", "color: red");
      return this.decode('&#8226;&#8226;&#8226;&#8226;&#8226;');
    } else {
      return '';
    }
  }

  setTangibleResources(index: any) {
      var i = Math.floor(Math.random() * this.resources.length)
      var resource = this.resources[i];
      if (resource == 'Wood') {
        this.setWoodHex(index);
      }
      if (resource == 'Wheat') {
        this.setWheatHex(index);
      }
      if (resource == 'Sheep') {
        this.setSheepHex(index);
      }
      if (resource == 'Brick') {
        this.setBrickHex(index);
      }
      if (resource == 'Ore') {
        this.setOreHex(index);
      }
      this.resources.splice(i, 1);
  }

  setWoodHex(index: any) {
    document.getElementsByClassName("hex")[index].setAttribute("style", "background-image:url('assets/wood_1.png');background-size:contain");
    document.getElementsByClassName("token")[index].setAttribute("style", "display:inline-block");
  }

  setWheatHex(index: any) {
    document.getElementsByClassName("hex")[index].setAttribute("style", "background-image:url('assets/wheat_1.png');background-size:contain");
    document.getElementsByClassName("token")[index].setAttribute("style", "display:inline-block");
  }

  setSheepHex(index: any) {
    document.getElementsByClassName("hex")[index].setAttribute("style", "background-image:url('assets/sheep_1.png');background-size:contain");
    document.getElementsByClassName("token")[index].setAttribute("style", "display:inline-block");
  }

  setBrickHex(index: any) {
    document.getElementsByClassName("hex")[index].setAttribute("style", "background-image:url('assets/brick_1.png');background-size:contain");
    document.getElementsByClassName("token")[index].setAttribute("style", "display:inline-block");
  }

  setOreHex(index: any) {
    document.getElementsByClassName("hex")[index].setAttribute("style", "background-image:url('assets/ore_1.png');background-size:contain");
    document.getElementsByClassName("token")[index].setAttribute("style", "display:inline-block");
  }

  setDesertHex(index: any) {
    document.getElementsByClassName("hex")[index].setAttribute("style", "background-image:url('assets/desert_1.png');background-size:contain");
    document.getElementsByClassName("token")[index].setAttribute("style", "display:none");
  }

  resetHexColors() {
    var el = document.getElementsByClassName('hex');
    for (var i = 0; i < el.length; i++) {
      document.getElementsByClassName("hex")[i].setAttribute("style", "background-color:lightskyblue");
    }
  }

  resetNumberTokens() {
    var el = document.getElementsByClassName('token');
    for (var i = 0; i < el.length; i++) {
      document.getElementsByClassName("token")[i].setAttribute("style", "display:none");
    }
  }

  setResourcedHexOutline() {
    var el = document.getElementsByClassName('hex-outline');
    for (var i = 0; i < el.length; i++) {
      document.getElementsByClassName("hex-outline")[i].setAttribute("style", "background-color:lightskyblue");
    }
  }

  resetHexOutline() {
    var el = document.getElementsByClassName('hex-outline');
    for (var i = 0; i < el.length; i++) {
      document.getElementsByClassName("hex-outline")[i].setAttribute("style", "background-color:white");
    }
  }

  onClear() {
    this.resetHexOutline();
    this.resetHexColors();
    this.resetNumberTokens();
    this.hex1_number = '';
    this.hex2_number = '';
    this.hex3_number = '';
    this.hex4_number = '';
    this.hex5_number = '';
    this.hex6_number = '';
    this.hex7_number = '';
    this.hex8_number = '';
    this.hex9_number = '';
    this.hex10_number = '';
    this.hex11_number = '';
    this.hex12_number = '';
    this.hex13_number = '';
    this.hex14_number = '';
    this.hex15_number = '';
    this.hex16_number = '';
    this.hex17_number = '';
    this.hex18_number = '';
    this.hex19_number = '';
    this.hex1_prob = '';
    this.hex2_prob = '';
    this.hex3_prob = '';
    this.hex4_prob = '';
    this.hex5_prob = '';
    this.hex6_prob = '';
    this.hex7_prob = '';
    this.hex8_prob = '';
    this.hex9_prob = '';
    this.hex10_prob = '';
    this.hex11_prob = '';
    this.hex12_prob = '';
    this.hex13_prob = '';
    this.hex14_prob = '';
    this.hex15_prob = '';
    this.hex16_prob = '';
    this.hex17_prob = '';
    this.hex18_prob = '';
    this.hex19_prob = '';
  }

  decode(str: string) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
    });
  }

  onReset() {
    this.newGameEvent.emit('');
  }
}
