import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card, emptyCard } from '../card'
import { DECK } from '../card-deck';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
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

  @Input() isPlayerTurn!: boolean;
  @Input() playerIsKings!: boolean;
  @Input() playerIsCols!: boolean;

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
  }

  onForwardSelectedCard(selectedCard: Card){
    this.handCardSelected = true;
    this.selectedHandCard = selectedCard;
  }

  onHandCardPlayed(playedCard: Card){
    // Update hand to remove played card
    this.updateHand(playedCard);
    // Update the handCardSelected variable to reflect that a hand card is no longer selected.
    this.handCardSelected = false;
    // Opponent make a move
    if (this.opponentCards.length > 0){
      this.opponentPlay();
    }
    // Check whether the round is over. If it is, then we update the total scores, and start a new round.
    if (this.handCards.length == 0 && this.opponentCards.length == 0) {
      this.updateScoresAfterRound();

      if (this.round >= 6) {
        // End the game here
      } else {
        // Start next round
        setTimeout(() => this.dealRound(), 5000);
      }

    }
  }

  updateHand(cardPlayed: Card) {
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
      this.opponentScores.push(bestRowScore);
    } else {
      this.playerScores.push(bestRowScore);
      this.opponentScores.push(bestColScore);
    }
  }

  ngOnChanges(changes: SimpleChanges){
    // Check to see if round is over, and starts a new round if it is
    if (this.handCards.length == 0 && this.opponentCards.length == 0){
      this.dealRound();
      this.boardConfiguration = [emptyCard, emptyCard, emptyCard, emptyCard, this.startingCard, emptyCard, emptyCard, emptyCard, emptyCard];
    }
  }

  dealRound(): void{
    if (this.deck.length < 9){
      // end game here
    } else {
      // Removes cards from the deck, and puts them into the starting positions/has.
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
  }

}
