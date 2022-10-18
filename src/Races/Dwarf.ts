import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints: number;
  static amountOfInstances = 0;
    
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this.maxLifePoints = 80;
    Dwarf.amountOfInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.amountOfInstances;
  }
}