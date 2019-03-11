import { Component, OnInit, Input } from '@angular/core';
import { Die } from '../die/die.component';

@Component({
  selector: 'app-scorecards',
  templateUrl: './scorecards.component.html',
  styleUrls: ['./scorecards.component.scss']
})
export class ScorecardsComponent implements OnInit {
  public scorecard: Scorecard = new Scorecard();

  constructor() { }

  ngOnInit() {
    console.log(this.scorecard);
  }

  @Input()
  dice: Die[];

  get displayDiceNumbers(){
    return this.dice.map(d => d.currentSelected);
  }
}

export class Scorecard {
  ones?: number = null;
  twos?: number= null;
  threes?: number= null;
  fours?: number= null;
  fives?: number= null;
  sixes?: number= null;
  threeOfAKind?: number= null;
  fourOfAKind?: number= null;
  fullHouse?: number= null;
  smallStraight?: number= null;
  largeStraight?: number= null;
  Yatzee?: number[]= null;
  chance?: number= null;
}