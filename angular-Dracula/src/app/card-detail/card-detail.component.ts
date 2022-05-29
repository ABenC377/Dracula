import { Component, OnInit, Input } from '@angular/core';
import { Card } from "../card";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor() { };

  ngOnInit(): void {
  };

  @Input() card?: Card;

}
