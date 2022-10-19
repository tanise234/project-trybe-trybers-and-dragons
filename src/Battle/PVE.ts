import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVE extends Battle {
  fighter: Fighter;
  monsters: (Monster | Fighter | SimpleFighter)[];

  constructor(
    fighter: Fighter,
    monsters: (Monster | Fighter | SimpleFighter)[],
  ) {
    super(fighter);
    this.fighter = fighter;
    this.monsters = monsters;
  }

  fight(): number {
    while (
      this.fighter.lifePoints !== -1
      && this.monsters.every((monster) => monster.lifePoints !== -1)
    ) {
      this.fighter.attack(
        this.monsters[getRandomInt(0, this.monsters.length - 1)],
      );
      this.monsters[getRandomInt(0, this.monsters.length - 1)]
        .attack(this.fighter);
    }
    return super.fight();
  }
}