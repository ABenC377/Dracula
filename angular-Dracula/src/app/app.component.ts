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

  startGame(): void {
    this.playGame = true;
  }

  onGameFinished(gameScores: number[]): void {
    let playerScore: number = gameScores[0];
    let opponentScore: number = gameScores[1];
  }
}
