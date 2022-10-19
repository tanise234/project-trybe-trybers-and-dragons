import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  energyType: EnergyType;
  static amountOfInstances = 0;
    
  constructor(name: string) {
    super(name);
    
    this.energyType = 'mana';
    Necromancer.amountOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.amountOfInstances;
  }
}