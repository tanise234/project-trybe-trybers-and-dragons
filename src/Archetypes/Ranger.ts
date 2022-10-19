import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energyType: EnergyType;
  static amountOfInstances = 0;
    
  constructor(name: string) {
    super(name);
    
    this.energyType = 'stamina';
    Ranger.amountOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.amountOfInstances;
  }
}