import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeGame = '';

  map = new Map<String, String>();

  constructor(public fb: FormBuilder) {
    this.map.set("catan", "The Settlers of Catan" + this.decode("&#8482;"));
    this.map.set("extension", "Catan 5 & 6 Player Extension" + this.decode("&#8482;"));
  }

  gameSelectionForm = this.fb.group({
    game: ['']
  })

  changeGame() {
    this.activeGame = this.gameSelectionForm.value.game.key;
  }

  reset() {
    this.activeGame = '';
    this.gameSelectionForm = this.fb.group({
      game: ['']
    })
  }

  decode(str: string) {
    return str.replace(/&#(\d+);/g, function(match, dec) {
      return String.fromCharCode(dec);
    });
  }
}
