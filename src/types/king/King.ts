import { Character } from "../character/Character";
import { type CharacterStructure } from "../character/Character";
import { type CharacterDataStructure } from "../character/Character";

export interface KingStructure extends CharacterStructure {
  yearsOfReign: number;
}

export class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
