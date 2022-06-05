import { Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  isKing: boolean;
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

  @Input() boardConfiguration!: Card[];
  @Input() handCardSelected!: boolean;
  @Input() selectedHandCard!: Card;

  @Output() handCardPlayed: EventEmitter<Card> = new EventEmitter<Card>();
  @Output() scoresUpdated: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor() {
    // As a default, we set this to true, though we will alter implemnt this to be changable before the game.
    this.isKing = true;

    // The first three values are the column scores, and the last three are the row scores
    this.scores = [0, 0, 0, 0, 0, 0];
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

  // When a score is updated, update the current score array
  onScoreUpdatedCol1(newScore: number){
    this.scores[0] = newScore;
    this.scoresUpdated.emit(this.scores);
  }

  onScoreUpdatedCol2(newScore: number){
    this.scores[1] = newScore;
    this.scoresUpdated.emit(this.scores);
  }

  onScoreUpdatedCol3(newScore: number){
    this.scores[2] = newScore;
    this.scoresUpdated.emit(this.scores);
  }

  onScoreUpdatedRow1(newScore: number){
    this.scores[3] = newScore;
    this.scoresUpdated.emit(this.scores);
  }

  onScoreUpdatedRow2(newScore: number){
    this.scores[4] = newScore;
    this.scoresUpdated.emit(this.scores);
  }

  onScoreUpdatedRow3(newScore: number){
    this.scores[5] = newScore;
    this.scoresUpdated.emit(this.scores);
  }
}
