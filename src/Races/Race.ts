export default abstract class Race {
  protected readonly name: string;
  protected readonly dexterity: number;

  constructor(name: string, dexterity: number) {
    this.name = name;
    this.dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented.');
  }

  abstract get maxLifePoints(): number;
}