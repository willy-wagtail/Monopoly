import { SquareType } from ".";

export type Chance = {
  type: SquareType.Chance;
};

export type CreateChance = () => Chance;
