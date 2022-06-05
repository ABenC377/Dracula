import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{

  constructor() { }

  @Input() card!: Card;

  @Output() selectCard: EventEmitter<Card> = new EventEmitter<Card>();

  select(selectedCard: Card){
    this.selectCard.emit(selectedCard);
  }
}
