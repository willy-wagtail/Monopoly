import { SquareType } from ".";

export type CommunityChest = {
  type: SquareType.CommunityChest;
};

export type CreateCommunityChest = () => CommunityChest;
