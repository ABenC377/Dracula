import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card, emptyCard } from '../card'
import { DECK } from '../card-deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  deck: Card[];
  round: number;
  handCards: Card[];
  opponentCards: Card[];
  roundScores: number[];
  playerScores: number[];
  opponentScores: number[];
  startingCard!: Card;
  boardConfiguration!: Card[];
  selectedHandCard!: Card;
  handCardSelected!: boolean;
  playerScoreTotal: number;
  opponentScoreTotal: number;
  roundCurrentlyBeingPlayed: boolean;

  @Input() isPlayerTurn!: boolean;
  @Input() playerIsKings!: boolean;
  @Input() playerIsCols!: boolean;

  @Output() gameFinished: EventEmitter<number[]> = new EventEmitter<number[]>();

  constructor(){
    this.deck = DECK;
    this.round = 0;
    this.handCards = [];
    this.opponentCards = [];
    this.selectedHandCard = emptyCard;
    this.handCardSelected = false;
    this.roundScores = [0, 0, 0, 0, 0, 0];
    this.playerScores = [];
    this.opponentScores = [];
    this.playerScoreTotal = 0;
    this.opponentScoreTotal = 0;
    this.roundCurrentlyBeingPlayed = true;
  }

  onForwardSelectedCard(selectedCard: Card){
    this.handCardSelected = true;
    this.selectedHandCard = selectedCard;
  }

  onHandCardPlayed(playedCard: Card){
    // Update hand to remove played card
    this.updateHandAfterCardPlayed(playedCard);
    // Update the handCardSelected and isPlayerturn variables.
    this.handCardSelected = false;
    this.isPlayerTurn = false;

    this.nextStepAfterCardPlayed();
  }

  updateHandAfterCardPlayed(cardPlayed: Card) {
    // We make a new temporary hand
    let newHand: Card[] = [];
    // Iterate through the previous hand, and where the card is not the played card,
    // add it to the temporary hand.
    for (let i = 0; i < this.handCards.length; i += 1){
      let ithCard = this.handCards[i];
      if (ithCard.id != cardPlayed.id){
        newHand.push(ithCard)
      }
    }
    // Then replace the hand with the temporary hand.
    this.handCards = newHand;
  }

  onScoresUpdated(newScores: number[]){
    this.roundScores = newScores;
  }

  updateScoresAfterRound() {
    let bestColScore: number = 0;
    let bestRowScore: number = 0;
    for (let i = 0; i < 3; i += 1){
      if (this.roundScores[i] > bestColScore) {
        bestColScore = this.roundScores[i];
      }
    }
    for (let i = 3; i < 6; i += 1) {
      if (this.roundScores[i] > bestRowScore) {
        bestRowScore = this.roundScores[i];
      }
    }
    if (this.playerIsCols) {
      this.playerScores.push(bestColScore);
      this.playerScoreTotal += bestColScore;
      this.opponentScores.push(bestRowScore);
      this.opponentScoreTotal += bestRowScore;
    } else {
      this.playerScores.push(bestRowScore);
      this.playerScoreTotal += bestRowScore;
      this.opponentScores.push(bestColScore);
      this.opponentScoreTotal += bestColScore;
    }
  }

  ngOnInit(){
    this.dealRound();
    if (!this.isPlayerTurn && this.opponentCards.length > 0) {
      this.opponentPlay();
    }
  }

  nextStepAfterCardPlayed() {
    // Check to see if round is over, and starts a new round if it is
    if (this.handCards.length == 0 && this.opponentCards.length == 0){
      if (this.round >= 6) {
        this.updateScoresAfterRound();
        this.gameFinished.emit([this.playerScoreTotal, this.opponentScoreTotal]);
      } else {
        this.updateScoresAfterRound();
        setTimeout(() => this.roundCurrentlyBeingPlayed = false, 500);
      }
    }
    // Check to see if it is opponent's turn, and opponent has cards to play
    if (!this.isPlayerTurn && this.opponentCards.length > 0) {
      this.opponentPlay();
    }
  }

  dealRound(): void{
    // Removes cards from the deck, and puts them into the starting positions/hands.
    this.startingCard = this.deck.pop() as Card;
    this.handCards.push(this.deck.pop() as Card);
    this.opponentCards.push(this.deck.pop() as Card);
    this.handCards.push(this.deck.pop() as Card);
    this.opponentCards.push(this.deck.pop() as Card);
    this.handCards.push(this.deck.pop() as Card);
    this.opponentCards.push(this.deck.pop() as Card);
    this.handCards.push(this.deck.pop() as Card);
    this.opponentCards.push(this.deck.pop() as Card);
    this.boardConfiguration = [emptyCard, emptyCard, emptyCard, emptyCard, this.startingCard, emptyCard, emptyCard, emptyCard, emptyCard];
    this.round += 1;
    if (!this.isPlayerTurn && this.opponentCards.length > 0) {
      this.opponentPlay();
    }
  }

  isPlayable(index: number): boolean{
    if (index == 1 || index == 3 || index == 4 || index == 5 || index == 7 || (index == 0 && (this.boardConfiguration[1].suit != "empty" || this.boardConfiguration[3].suit != "empty")) || (index == 2 && (this.boardConfiguration[1].suit != "empty" || this.boardConfiguration[5].suit != "empty")) || (index == 6 && (this.boardConfiguration[7].suit != "empty" || this.boardConfiguration[3].suit != "empty")) || (index == 8 && (this.boardConfiguration[7].suit != "empty" || this.boardConfiguration[5].suit != "empty"))) {
      return true;
    } else {
      return false;
    }
  }

  // This is currently very dumb.  Improve later.
  opponentPlay(): void{
    let opponentCardHasBeenPlayed: boolean = false;
    let index: number = 0;
    while (opponentCardHasBeenPlayed == false){
      if (this.boardConfiguration[index].suit == "empty" && this.isPlayable(index)){
        this.boardConfiguration[index] = this.opponentCards.pop() as Card;
        opponentCardHasBeenPlayed = true;
        this.isPlayerTurn = true;
      } else {
        index += 1;
      }
    }
    this.isPlayerTurn = true;
  }

  startNextRound(): void {
    this.dealRound();
    this.roundCurrentlyBeingPlayed = true;
  }

}
