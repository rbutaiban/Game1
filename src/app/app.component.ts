import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MainComponent } from "./main/main.component";
import { CardGridComponent } from "./card-grid/card-grid.component";
import { CardComponent } from "./card/card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MainComponent, CardGridComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Memory Challenge';
}
