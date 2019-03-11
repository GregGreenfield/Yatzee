import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.scss']
})
export class DieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private die: Die;
 
  @Input()
  set update(die: Die) {
    this.die = die;
  }
 
  get selectedNumber(): number { return this.die.currentSelected; }
  get isLocked(): boolean { return this.die.lockRoll; }

  public toggleLock(){
    this.die.lockRoll = !this.die.lockRoll;
  }
}

export class Die{
  public currentSelected: number = 0;
  public lockRoll?: boolean = false;
}