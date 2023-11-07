import { SquareType } from ".";

export type GoToJail = {
  type: SquareType.GoToJail;
};

export type CreateGoToJail = () => GoToJail;
