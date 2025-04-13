import { Component, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from "../card/card.component";
import {MatButtonModule} from '@angular/material/button';
import { CardGridComponent } from "../card-grid/card-grid.component";
import cards, { Card } from '../../data/card';
import { log } from 'console';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, CardGridComponent, CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  cards = cards;
  score = 0;

  resetGame(){
    cards.forEach(item => {
      item.flip = 'inactive';
      item.success = false;
    })
    this.score = 0;
    this.cards = this.shuffle(this.cards);
  }

  updateScore(scoreValue: any){
    // this.score = 20;
    // alert(this.score);
    console.log(this.score, "score jjjjj");
    
    this.score = scoreValue;
}

  shuffle<T>(array: T[]): T[] {
  let arrayLength = 0;
  for (var el in array){
    arrayLength++;
  }

  let currentIndex = arrayLength,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};
}



