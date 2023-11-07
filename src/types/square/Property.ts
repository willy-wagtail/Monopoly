import { SquareType } from ".";

export type Property = {
  type: SquareType.Property;
  colour: PropertyColour;
  streetName: string;
  price: number;
};

export type PropertyColour =
  | "Brown"
  | "Light Blue"
  | "Pink"
  | "Orange"
  | "Red"
  | "Yellow"
  | "Green"
  | "Dark Blue";

export type CreateProperty = (
  colour: PropertyColour,
  streetName: string,
  price: number
) => Property;
