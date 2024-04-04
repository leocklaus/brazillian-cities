import { Component, OnInit } from '@angular/core';
import { GuessesComponent } from './guesses/guesses.component';
import { FormComponent } from './form/form.component';
import { city } from '../model/city';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    GuessesComponent,
    FormComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit{

  dailyCountry!:string;
  cities!: city[];
  guessCount: number = 0;

  constructor(private gameService: GameService){}

  ngOnInit(): void {
    this.gameService.getCities()
      .subscribe(data => {
        this.cities = data;
      })
  }

  checkGuess(){}

  handleWrongGuess(){}

  handleCorrectGuess(){}


}
