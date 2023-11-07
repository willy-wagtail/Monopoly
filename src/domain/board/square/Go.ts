import { SquareType } from ".";

export type Go = {
  type: SquareType.Go;
};

export type CreateGo = () => Go;
