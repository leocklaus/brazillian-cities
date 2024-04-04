import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameService } from '../game.service';
import { cityNames } from '../../model/city';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit{

  cityNames!: cityNames;

  //criar evento
  
  constructor(private gameService:GameService){}

  ngOnInit(): void {
    this.gameService.getCityNames()
      .subscribe(data => this.cityNames = data);
  }

  guessForm = new FormGroup({
    guess: new FormControl()
  })

  handleGuess(){
    this.checkValidGuess();
    //chamar emissor de evento
  }

  checkValidGuess(){
    if(this.cityNames.includes(this.guessForm.value.guess)){
      console.log("ok");
    }
  }

}
