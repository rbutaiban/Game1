import { NgFor } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from "../card/card.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

import { Card } from '../../data/card';

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [NgFor, CardComponent, MatGridListModule, MatButtonModule],
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.css'
})
export class CardGridComponent {

  
  @Input() cards: Card[] = [];
  // score = 10;
  @Input() score!: number;
  @Output() selected = new EventEmitter<Card>();
  @Output() scoreValue: EventEmitter<any> = new EventEmitter();

   selectCard(card: Card) {

  }
  updateScore(scoreValue: any){
    this.score = scoreValue;
    // alert(this.score);
    console.log(this.score, "score");
    
    this.scoreValue.emit(this.score);
}
}