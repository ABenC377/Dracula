import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-line-score',
  templateUrl: './line-score.component.html',
  styleUrls: ['./line-score.component.css']
})
export class LineScoreComponent implements OnInit {
  totalScore: number;
  totalRed: number;
  totalBlack: number;
  totalClub: number;
  totalDiamond: number;
  totalHeart: number;
  totalSpade: number;
  jokerPlayed: boolean;


  @Input() isKing!: boolean;
  @Input() lineCards!: Card[];

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

  ngOnInit(): void {
    for (let i = 0; i < this.lineCards.length; i += 1){
      let lineCard = this.lineCards[i];
      if (lineCard.value == "empty"){
        continue;
      } else if (lineCard.value == "Joker"){
        this.jokerPlayed = true;
        continue;
      }
      if (this.isKing){
        this.totalScore += lineCard.KValue;
      } else {
        this.totalScore += lineCard.QValue;
      }
      if (lineCard.suit == "Club"){
        this.totalBlack += 1;
        this.totalClub += 1;
      } else if (lineCard.suit == "Diamond"){
        this.totalRed += 1;
        this.totalDiamond += 1;
      } else if (lineCard.suit == "Heart"){
        this.totalRed += 1;
        this.totalHeart += 1;
      } else if (lineCard.suit == "Spade"){
        this.totalBlack += 1;
        this.totalSpade += 1;
      }
    }
    if (this.jokerPlayed == true){
      this.totalScore = 0;
    } else if ((this.totalClub == 3) || (this.totalDiamond == 3) || (this.totalHeart == 3) || (this.totalSpade == 3)){
      this.totalScore *= 5;
    } else if ((this.totalRed == 3) || (this.totalBlack == 3)){
      this.totalScore *= 3;
    } else if ((this.totalClub == 2) || (this.totalDiamond == 2) || (this.totalHeart == 2) || (this.totalSpade == 2)){
      this.totalScore *= 2;
    }
  }

}
