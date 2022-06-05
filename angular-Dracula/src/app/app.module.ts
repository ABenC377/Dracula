import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { GameComponent } from './game/game.component';
import { ScoresComponent } from './scores/scores.component';
import { BoardComponent } from './board/board.component';
import { HandComponent } from './hand/hand.component';
import { LineScoreComponent } from './line-score/line-score.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDetailComponent,
    GameComponent,
    ScoresComponent,
    BoardComponent,
    HandComponent,
    LineScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
