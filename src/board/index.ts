import { createShuffledChanceDeck } from "../cards/chance";
import { createShuffledCommunityChestDeck } from "../cards/community-chest";
import { createSquares } from "../square";
import { CreateBoard } from "../types/board";

export const createBoard: CreateBoard = () => {
  return {
    squares: createSquares(),
    chanceDeck: createShuffledChanceDeck(),
    communityChest: createShuffledCommunityChestDeck(),
  };
};
