import { Component, OnInit, Input } from '@angular/core';
import { Die } from "../die/die.component";

@Component({
  selector: 'app-rolloptions',
  templateUrl: './rolloptions.component.html',
  styleUrls: ['./rolloptions.component.scss']
})
export class RolloptionsComponent implements OnInit {
  public numberOfRolls = 3;

  constructor() { 
  }

  ngOnInit() {
  }

  @Input()
  dice: Die[];

  rollDice(){
    if (this.numberOfRolls > 0) {
      this.dice.forEach(die => {
        if (!die.lockRoll)
          die.currentSelected = Math.floor(Math.random() * 5) + 1;
      });
      this.numberOfRolls--;
    }
  }
}