import { Component, OnInit, Input } from '@angular/core';
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
  playerTurn: boolean;
  handCards: Card[];
  opponentCards: Card[];
  startingCard!: Card;
  boardConfiguration!: Card[];
  selectedHandCard!: Card;
  handCardSelected!: boolean;

  constructor(){
    this.deck = DECK;
    this.round = 1;
    this.playerTurn = true;
    this.handCards = [];
    this.opponentCards = [];
    this.selectedHandCard = emptyCard;
    this.handCardSelected = false;
  }

  onForwardSelectedCard(selectedCard: Card){
    this.handCardSelected = true;
    this.selectedHandCard = selectedCard;
  }

  onHandCardPlayed(playedCard: Card){
    // We make a new temporary hand
    let newHand: Card[] = [];
    // Iterate through the previous hand, and where the card is not the played card,
    // add it to the temporary hand.
    for (let i = 0; i < this.handCards.length; i += 1){
      let ithCard = this.handCards[i];
      if (ithCard.id != playedCard.id){
        newHand.push(ithCard)
      }
    }
    // Then replace the hand with the temporary hand.
    this.handCards = newHand;
    // Finally, we update the handCardSelected variable to reflect that a hand card is no longer selected.
    this.handCardSelected = false;
  }

  ngOnInit() {
    this.dealRound();
    this.boardConfiguration = [emptyCard, emptyCard, emptyCard, emptyCard, this.startingCard, emptyCard, emptyCard, emptyCard, emptyCard];
  }

  dealRound(){
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
    }
  }

}
