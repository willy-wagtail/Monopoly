import { SquareType } from ".";

export type Station = {
  type: SquareType.Station;
  name: string;
  price: number;
};

export type CreateStation = (name: string, price: number) => Station;
