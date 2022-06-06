import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Card, emptyCard } from '../card'

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  selectedHandCard: Card;

  @Input() handCards!: Card[];
  @Input() isPlayerTurn!: boolean;
  @Output() forwardSelectedCard: EventEmitter<Card> = new EventEmitter<Card>();

  constructor() {
    this.selectedHandCard = emptyCard;
  }

  onSelectCard(selectedCard: Card){
    if (this.isPlayerTurn) {
      this.selectedHandCard = selectedCard;
      this.forwardSelectedCard.emit(this.selectedHandCard);
    }
  }

  ngOnInit(): void {
  }
}
