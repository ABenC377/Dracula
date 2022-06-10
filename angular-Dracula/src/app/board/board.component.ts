import { Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  scores: number[];
  card1!: Card;
  card2!: Card;
  card3!: Card;
  card4!: Card;
  card5!: Card;
  card6!: Card;
  card7!: Card;
  card8!: Card;
  card9!: Card;
  row1!: Card[];
  row2!: Card[];
  row3!: Card[];
  col1!: Card[];
  col2!: Card[];
  col3!: Card[];
  columnsScoreKings!: boolean;

  @Input() boardConfiguration!: Card[];
  @Input() handCardSelected!: boolean;
  @Input() selectedHandCard!: Card;
  @Input() playerIsCols!: boolean;
  @Input() playerIsKings!: boolean;

  @Output() handCardPlayed: EventEmitter<Card> = new EventEmitter<Card>();
  @Output() scoresUpdated: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() {
    // The first three values are the column scores, and the last three are the row scores
    this.scores = [0, 0, 0, 0, 0, 0];
  }

  ngOnInit():void {
    if ((this.playerIsCols && this.playerIsKings) || (!this.playerIsCols && !this.playerIsKings)) {
      this.columnsScoreKings = true;
    } else {
      this.columnsScoreKings = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Set the individual card and row variables to make them easier to move around
    this.card1 = this.boardConfiguration[0];
    this.card2 = this.boardConfiguration[1];
    this.card3 = this.boardConfiguration[2];
    this.card4 = this.boardConfiguration[3];
    this.card5 = this.boardConfiguration[4];
    this.card6 = this.boardConfiguration[5];
    this.card7 = this.boardConfiguration[6];
    this.card8 = this.boardConfiguration[7];
    this.card9 = this.boardConfiguration[8];
    this.row1 = [this.card1, this.card2, this.card3];
    this.row2 = [this.card4, this.card5, this.card6];
    this.row3 = [this.card7, this.card8, this.card9];
    this.col1 = [this.card1, this.card4, this.card7];
    this.col2 = [this.card2, this.card5, this.card8];
    this.col3 = [this.card3, this.card6, this.card9];
    this.scores[0] = this.getScore(this.col1, this.columnsScoreKings);
    this.scores[1] = this.getScore(this.col2, this.columnsScoreKings);
    this.scores[2] = this.getScore(this.col3, this.columnsScoreKings);
    this.scores[3] = this.getScore(this.row1, !this.columnsScoreKings);
    this.scores[4] = this.getScore(this.row2, !this.columnsScoreKings);
    this.scores[5] = this.getScore(this.row3, !this.columnsScoreKings);
    this.scoresUpdated.emit(this.scores);
  }

  // When a card is selected on the board, we check to see if a card has already been selected in the hand.
  // If it has, then replace the board card with the hand card,
  // and let the game component know that the hand card has been played.
  onSelectCard1(selectedCard: Card){

    // Check to see if a hand card has been selected
    if (this.handCardSelected){

      // Check to make sure selected board position is empty
      // And that a card has been played in an adjacent position
      if (selectedCard.suit == "empty" && (this.card2.suit != "empty" || this.card4.suit != "empty")){

        // Replace selected empty card
        this.boardConfiguration[0] = this.selectedHandCard;
        this.card1 = this.selectedHandCard;
        this.row1 = [this.card1, this.card2, this.card3];
        this.col1 = [this.card1, this.card4, this.card7];

        // Let the game component know that the selected hand card has been played
        this.handCardPlayed.emit(this.selectedHandCard);
      }
    }
  }

  // Repeat for card position 2
  onSelectCard2(selectedCard: Card){
    if (this.handCardSelected){
      if (selectedCard.suit == "empty"){
        this.boardConfiguration[1] = this.selectedHandCard;
        this.handCardPlayed.emit(this.selectedHandCard);
      }
    }
  }

  // And for card position 3
  onSelectCard3(selectedCard: Card){
    if (this.handCardSelected){
      if (selectedCard.suit == "empty" && (this.card2.suit != "empty" || this.card6.suit != "empty")){
        this.boardConfiguration[2] = this.selectedHandCard;
        this.card3 = this.selectedHandCard;
        this.row1 = [this.card1, this.card2, this.card3];
        this.col3 = [this.card3, this.card6, this.card9];
        this.handCardPlayed.emit(this.selectedHandCard);
      }
    }
  }

  // And for card position 4
  onSelectCard4(selectedCard: Card){
    if (this.handCardSelected){
      if (selectedCard.suit == "empty"){
        this.boardConfiguration[3] = this.selectedHandCard;
        this.card4 = this.selectedHandCard;
        this.row2 = [this.card4, this.card5, this.card6];
        this.col1 = [this.card1, this.card4, this.card7];
        this.handCardPlayed.emit(this.selectedHandCard);
      }
    }
  }

  // And for card position 5
  onSelectCard5(selectedCard: Card){
    if (this.handCardSelected){
      if (selectedCard.suit == "empty"){
        this.boardConfiguration[4] = this.selectedHandCard;
        this.card5 = this.selectedHandCard;
        this.row2 = [this.card4, this.card5, this.card6];
        this.col2 = [this.card2, this.card5, this.card8];
        this.handCardPlayed.emit(this.selectedHandCard);
      }
    }
  }

  // And for card position 6
  onSelectCard6(selectedCard: Card){
    if (this.handCardSelected){
      if (selectedCard.suit == "empty"){
        this.boardConfiguration[5] = this.selectedHandCard;
        this.card6 = this.selectedHandCard;
        this.row2 = [this.card4, this.card5, this.card6];
        this.col3 = [this.card3, this.card6, this.card9];
        this.handCardPlayed.emit(this.selectedHandCard);
      }
    }
  }

  // And for card position 7
  onSelectCard7(selectedCard: Card){
    if (this.handCardSelected){
      if (selectedCard.suit == "empty" && (this.card8.suit != "empty" || this.card4.suit != "empty")){
        this.boardConfiguration[6] = this.selectedHandCard;
        this.card7 = this.selectedHandCard;
        this.row3 = [this.card7, this.card8, this.card9];
        this.col1 = [this.card1, this.card4, this.card7];
        this.handCardPlayed.emit(this.selectedHandCard);
      }
    }
  }

  // And for card position 8
  onSelectCard8(selectedCard: Card){
    if (this.handCardSelected){
      if (selectedCard.suit == "empty"){
        this.boardConfiguration[7] = this.selectedHandCard;
        this.card8 = this.selectedHandCard;
        this.row3 = [this.card7, this.card8, this.card9];
        this.col2 = [this.card2, this.card5, this.card8];
        this.handCardPlayed.emit(this.selectedHandCard);
      }
    }
  }

  // And for card position 9
  onSelectCard9(selectedCard: Card){
    if (this.handCardSelected){
      if (selectedCard.suit == "empty" && (this.card8.suit != "empty" || this.card6.suit != "empty")){
        this.boardConfiguration[8] = this.selectedHandCard;
        this.card9 = this.selectedHandCard;
        this.row3 = [this.card7, this.card8, this.card9];
        this.col3 = [this.card3, this.card6, this.card9];
        this.handCardPlayed.emit(this.selectedHandCard);
      }
    }
  }


  getScore(cards: Card[], kingsScore: boolean): number {
    let jokerPlayed: boolean = false;
    let score: number = 0;
    let totalBlacks: number = 0;
    let totalReds: number = 0;
    let totalClubs: number = 0;
    let totalDiamonds: number = 0;
    let totalHearts: number = 0;
    let totalSpades: number = 0;

    for (let i: number = 0; i < cards.length; i ++) {
      let lineCard: Card = cards[i];

      // if the card is an empty card then can ignore
      if (lineCard.value == "empty"){
        continue;
      }
      
      // If a joker is played then can ignore the maths steps
      else if (lineCard.value == "Joker"){
        jokerPlayed = true;
        continue;
      }

      // Add the card score to the total score
      if (kingsScore){
        score += lineCard.KValue;
      } else {
        score += lineCard.QValue;
      }

      // Add the suit and colour to the counters
      if (lineCard.suit == "Clubs"){
        totalBlacks += 1;
        totalClubs += 1;
      } else if (lineCard.suit == "Diamonds"){
        totalReds += 1;
        totalDiamonds += 1;
      } else if (lineCard.suit == "Hearts"){
        totalReds += 1;
        totalHearts += 1;
      } else if (lineCard.suit == "Spades"){
        totalBlacks += 1;
        totalSpades += 1;
      }
    };

    // Now multiply depending on the suit/colour/joker counters
    if (jokerPlayed == true){
      score = 0;
    }
    if (totalClubs == 3 || totalDiamonds == 3 || totalHearts == 3 || totalSpades == 3){
      score *= 5;
    } else if (totalReds == 3 || totalBlacks == 3){
      score *= 3;
    } else if (totalClubs == 2 || totalDiamonds == 2 || totalHearts == 2 || totalSpades == 2){
      score *= 2;
    }
    
    return score;
  }
}
