import { Component, OnInit, Input } from '@angular/core';
import { Die } from '../die/die.component';
import { Scorecard } from '../models/scorecard';

@Component({
  selector: 'app-scorecards',
  templateUrl: './scorecards.component.html',
  styleUrls: ['./scorecards.component.scss']
})
export class ScorecardsComponent implements OnInit {
  @Input()
  dice: Die[];

  public scorecard: Scorecard = new Scorecard();

  constructor() { }

  ngOnInit() {
    console.log(this.scorecard);
  }

  get displayDiceNumbers(){
    return this.dice.map(d => d.currentSelected);
  }

}
