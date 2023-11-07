import { SquareType } from ".";

export type InJailOrJustVisiting = {
  type: SquareType.InJailOrJustVisiting;
};

export type CreateInJailOrJustVisiting = () => InJailOrJustVisiting;
