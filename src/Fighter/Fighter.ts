import Energy from '../Energy';

export interface FighterBasic {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export default interface Fighter extends FighterBasic{
  attack(enemy: FighterBasic): void;
  special?(enemy: FighterBasic): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}