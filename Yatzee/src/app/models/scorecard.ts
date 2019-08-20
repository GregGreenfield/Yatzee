export class Scorecard {
    ones: number;
    twos: number;
    threes: number;
    fours: number;
    fives: number;
    sixes: number;

    subTotal = this.ones + this.twos + this.threes + this.fours + this.fives + this.sixes;
    topBouns = this.subTotal >= 63 ? 35 : 0;
    upperTotal = this.subTotal + this.topBouns;

    threeOfAKind: number;
    fourOfAKind: number;
    fullHouse: number;
    smallStraight: number;
    longStraight: number;
    yahtzee: number;
    chance: number;
    yahtzeeBouns: number;

    lowerTotal = this.threeOfAKind + this.fourOfAKind + this.fullHouse + this.smallStraight + this.longStraight + this.yahtzee + this.chance + this.yahtzeeBouns;

    total = this.upperTotal + this.lowerTotal;
};
