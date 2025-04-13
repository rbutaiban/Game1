import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Card } from '../../data/card';
import { timer } from 'rxjs';
import { NgIf } from '@angular/common';
import { MainComponent } from "../main/main.component";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, MainComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})

export class CardComponent {
  // @Input() cardImg!: string;
  // // @Input() id!: number;
  // @Input() card!: Card;

  @Input() card!: Card;
  @Output() selected = new EventEmitter<Card>();
  @Input() cards: Card[] = [];
  @Input() score!: number;
  @Output() scoreValue: EventEmitter<any> = new EventEmitter();

  selectCard() {
    var gameCompleted: Card[] = this.cards.filter(item => item.success == true);
    var cards2: Card[] = this.cards.filter(item => item.flip == 'active' && item.success == false);
    if(cards2.length == 0){
      if(this.card.success == false){
        this.card.flip = (this.card.flip == 'inactive') ? 'active' : 'inactive';
        this.selected.emit(this.card);
      }
      
    }else if(cards2.length == 1){
      if(this.card.success == false){
        this.card.flip = (this.card.flip == 'inactive') ? 'active' : 'inactive';
        this.selected.emit(this.card);
      }
      if(cards2[0].id == this.card.id) {
        this.card.success = true;
        cards2[0].success = true;

        gameCompleted = this.cards.filter(item => item.success == true);
        this.score += 10;
        this.scoreValue.emit(this.score);
        console.log(this.score, "score");
        
        if (gameCompleted.length == this.cards.length){
          alert("Challenge completed!");
        }
      }else{
        setTimeout(() => 
          {
            this.cards.forEach((element) => {
              if(element.success == false){
                element.flip = 'inactive';
              }
            });
          }, 2000);
      }

    }

    
  }

  ngOnInit() {
  }

}

