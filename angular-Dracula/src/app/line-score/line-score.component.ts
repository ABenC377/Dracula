import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-line-score',
  templateUrl: './line-score.component.html',
  styleUrls: ['./line-score.component.css']
})
export class LineScoreComponent {
  totalScore: number;
  totalRed: number;
  totalBlack: number;
  totalClub: number;
  totalDiamond: number;
  totalHeart: number;
  totalSpade: number;
  jokerPlayed: boolean;


  @Input() scoreKings!: boolean;
  @Input() lineCards!: Card[];

  @Output() scoreUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.totalScore = 0;
    this.totalRed = 0;
    this.totalBlack = 0;
    this.totalClub = 0;
    this.totalDiamond = 0;
    this.totalHeart = 0;
    this.totalSpade = 0;
    this.jokerPlayed = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Reset all the score values to 0
    this.totalScore = 0;
    this.totalRed = 0;
    this.totalBlack = 0;
    this.totalClub = 0;
    this.totalDiamond = 0;
    this.totalHeart = 0;
    this.totalSpade = 0;
    this.jokerPlayed = false;

    // Iterate through the line cards
    for (let i = 0; i < this.lineCards.length; i += 1){
      let lineCard = this.lineCards[i];

      // if the card is an empty card then can ignore
      if (lineCard.value == "empty"){
        continue;
      }
      // If a joker is played then can ignore the maths steps
      else if (lineCard.value == "Joker"){
        this.jokerPlayed = true;
        continue;
      }

      // Add the card score to the total score
      if (this.scoreKings){
        this.totalScore += lineCard.KValue;
      } else {
        this.totalScore += lineCard.QValue;
      }

      // Add the suit and colour to the counters
      if (lineCard.suit == "Clubs"){
        this.totalBlack += 1;
        this.totalClub += 1;
      } else if (lineCard.suit == "Diamonds"){
        this.totalRed += 1;
        this.totalDiamond += 1;
      } else if (lineCard.suit == "Hearts"){
        this.totalRed += 1;
        this.totalHeart += 1;
      } else if (lineCard.suit == "Spades"){
        this.totalBlack += 1;
        this.totalSpade += 1;
      }
    };

    // Now multiply depending on the suit/colour/joker counters
    if (this.jokerPlayed == true){
      this.totalScore = 0;
    }
    if (this.totalClub == 3 || this.totalDiamond == 3 || this.totalHeart == 3 || this.totalSpade == 3){
      this.totalScore *= 5;
    } else if (this.totalRed == 3 || this.totalBlack == 3){
      this.totalScore *= 3;
    } else if (this.totalClub == 2 || this.totalDiamond == 2 || this.totalHeart == 2 || this.totalSpade == 2){
      this.totalScore *= 2;
    }
    this.scoreUpdated.emit(this.totalScore);
  }

}
