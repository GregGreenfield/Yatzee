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

  get numbersSubTotalUpper(): number{
    return this.scorecard.ones + 
          this.scorecard.twos +
          this.scorecard.threes +
          this.scorecard.fours +
          this.scorecard.fives +
          this.scorecard.sixes;
  }

  get numbersSubTotalLower(): number {
    return this.scorecard.threeOfAKind +
          this.scorecard.fourOfAKind +
          this.scorecard.fullHouse +
          this.scorecard.smallStraight +
          this.scorecard.largeStraight +
          this.scorecard.chance +
          (this.scorecard.Yatzee ? this.scorecard.Yatzee.length * 50 : 0);
  }

  get topSectionBonus(): boolean {
    return this.numbersSubTotalUpper > 65;
  }

  get topScore(): number {
    return this.topSectionBonus ? this.numbersSubTotalUpper + 25 : this.numbersSubTotalUpper;
  }

  get Total(): number {
    return this.topScore + this.numbersSubTotalLower;
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