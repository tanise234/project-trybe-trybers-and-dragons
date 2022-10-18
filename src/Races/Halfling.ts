import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints: number;
  static amountOfInstances = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this.maxLifePoints = 60;
    Halfling.amountOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.amountOfInstances;
  }
}