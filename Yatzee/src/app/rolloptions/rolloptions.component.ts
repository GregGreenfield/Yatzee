import { Component, OnInit } from '@angular/core';
import { Die } from "../die/die.component";

@Component({
  selector: 'app-rolloptions',
  templateUrl: './rolloptions.component.html',
  styleUrls: ['./rolloptions.component.scss']
})
export class RolloptionsComponent implements OnInit {
  public dice: Die[] = [{currentSelected: 0}, {currentSelected: 0}, {currentSelected: 0}, {currentSelected: 0}, {currentSelected: 0}] ;

  constructor() { 
  }

  ngOnInit() {
  }

  rollDice(){
    this.dice.forEach(die => {
      if (!die.lockRoll)
        die.currentSelected = Math.floor(Math.random() * 5) + 1;
    });
  }

}