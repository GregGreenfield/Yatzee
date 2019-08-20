import { Component, OnInit, Input } from '@angular/core';
import { Die } from "../die/die.component";

@Component({
  selector: 'app-rolloptions',
  templateUrl: './rolloptions.component.html',
  styleUrls: ['./rolloptions.component.scss']
})
export class RolloptionsComponent implements OnInit {
  @Input()
  dice: Die[];
  rollNumber = 0;

  constructor() { 
  }

  ngOnInit() {
  }

  rollDice(){
    this.dice.forEach(die => { setTimeout(() => {
        if (!die.lockRoll)
          die.currentSelected = Math.floor(Math.random() * 6) + 1;
      }, 1);
    });
    this.rollNumber++;
  }

}