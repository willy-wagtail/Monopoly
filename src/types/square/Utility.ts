import { SquareType } from ".";

export type Utility = {
  type: SquareType.Utility;
  name: string;
  price: number;
};

export type CreateUtility = (name: string, price: number) => Utility;
