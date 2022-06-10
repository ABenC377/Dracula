import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent {

  @Input() round!: number;
  @Input() playerScore!: number;
  @Input() opponentScore!: number;

  constructor() {
  }
}
