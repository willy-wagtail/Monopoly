import { ShuffledChanceDeck } from "../cards/chance";
import { ShuffledCommunityChestDeck } from "../cards/community-chest";
import { Squares } from "./square";

export type Board = {
  squares: Squares;
  communityChest: ShuffledCommunityChestDeck;
  chanceDeck: ShuffledChanceDeck;
};

export type CreateBoard = () => Board;
