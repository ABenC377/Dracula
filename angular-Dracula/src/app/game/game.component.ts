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
  startingCard!: Card;
  handCards!: Card[];
  opponentCards!: Card[];
  boardConfiguration!: Card[];

  constructor(){
    this.deck = DECK;
    this.round = 1;
    this.playerTurn = true;
    this.startingCard = this.deck[0];
    this.handCards = this.deck.slice(1, 5);
    this.opponentCards = this.deck.slice(5, 9);
    this.boardConfiguration = [emptyCard, emptyCard, emptyCard, emptyCard, this.startingCard, emptyCard, emptyCard, emptyCard, emptyCard];

  }

  ngOnInit(): void {
    }
}
