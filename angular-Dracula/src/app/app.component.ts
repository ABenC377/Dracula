import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  playGame: boolean;
  playerTurn: boolean;
  playerIsKing: boolean;
  playerIsCols: boolean;

  constructor() {
    this.title = "Dracula";
    this.playGame = false;
    this.playerTurn = true;
    this.playerIsKing = true;
    this.playerIsCols = true;
  }

  startGame() {
    this.playGame = true;
  }
}
