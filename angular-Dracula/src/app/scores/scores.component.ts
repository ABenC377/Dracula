import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent {

  playerTotal: number;
  opponentTotal: number;

  @Input() round!: number;
  @Input() playerScores!: number[];
  @Input() opponentScores!: number[];

  constructor() {
    this.playerTotal = 0;
    this.opponentTotal = 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.playerTotal = 0;
    this.opponentTotal = 0;
    for (let i = 0; i < this.playerScores.length; i += 1) {
      this.playerTotal += this.playerScores[i];
    }
    for (let i = 0; i < this.opponentScores.length; i += 1) {
      this.opponentTotal += this.opponentScores[i];
    }
  }

}
