import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card'

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {

  constructor() { }

  @Input() handCards!: Card[];

  ngOnInit(): void {
  }
}
