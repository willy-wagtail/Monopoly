import { SquareType } from ".";

export type Tax = {
  type: SquareType.Tax;
  name: string;
  amount: number;
};

export type CreateTax = (name: string, amount: number) => Tax;
