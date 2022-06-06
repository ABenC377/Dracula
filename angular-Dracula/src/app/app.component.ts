import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  playGame: boolean;
  isPlayerTurn: boolean;
  playerIsKings: boolean;
  playerIsCols: boolean;

  constructor() {
    this.title = "Dracula";
    this.playGame = false;
    this.isPlayerTurn = false;
    this.playerIsKings = false;
    this.playerIsCols = false;
  }

  startGame() {
    this.playGame = true;
  }

  changePlayerTurn() {
    this.isPlayerTurn = !this.isPlayerTurn;
  }

  changePlayerSuit() {
    this.playerIsKings = !this.playerIsKings;
  }

  changePlayerDirection() {
    this.playerIsCols = !this.playerIsCols;
  }
}
