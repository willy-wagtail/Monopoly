import { SquareType } from ".";

export type FreeParking = {
  type: SquareType.FreeParking;
};

export type CreateFreeParking = () => FreeParking;
