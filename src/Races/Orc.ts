import Race from './Race';

export default class Orc extends Race {
  maxLifePoints: number;
  static amountOfInstances = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this.maxLifePoints = 74;
    Orc.amountOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.amountOfInstances;
  }
}