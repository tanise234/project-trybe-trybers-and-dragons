import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  energyType: EnergyType;
  static amountOfInstances = 0;
    
  constructor(name: string) {
    super(name);
    
    this.energyType = 'mana';
    Mage.amountOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.amountOfInstances;
  }
}