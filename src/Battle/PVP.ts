import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  fighter1: Fighter;
  fighter2: Fighter;

  constructor(fighter1: Fighter, fighter2: Fighter) {
    super(fighter1);
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
  }

  fight(): number {
    while (this.fighter1.lifePoints !== -1 && this.fighter2.lifePoints !== -1) {
      this.fighter1.attack(this.fighter2);
      this.fighter2.attack(this.fighter1);
    }
    return super.fight();
  }
}