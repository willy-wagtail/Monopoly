import { CardType } from "..";

export type CommunityChestCard = {
  type: CardType.Community_Chest;
  text: CommunityChestCardText;
};

export type CommunityChestDeck = CommunityChestCard[];

export type ShuffledCommunityChestDeck = CommunityChestDeck;

export type CreateCommunityChestCard = (
  text: CommunityChestCardText
) => CommunityChestCard;

export type CreateCommunityChestDeck = () => CommunityChestDeck;

export type CreateShuffledCommunityChestDeck = () => ShuffledCommunityChestDeck;

export type CommunityChestCardText =
  | "Advance to Go (Collect £200)"
  | "Bank error in your favour. Collect £200"
  | "Doctor’s fee. Pay £50"
  | "From sale of stock you get £50"
  | "Get Out of Jail Free"
  | "Go to Jail. Go directly to jail, do not pass Go, do not collect £200"
  | "Holiday fund matures. Receive £100"
  | "Income tax refund. Collect £20"
  | "It is your birthday. Collect £10 from every player"
  | "Life insurance matures. Collect £100"
  | "Pay hospital fees of £100"
  | "Pay school fees of £50"
  | "Receive £25 consultancy fee"
  | "You are assessed for street repairs. £40 per house. £115 per hotel"
  | "You have won second prize in a beauty contest. Collect £10"
  | "You inherit £100";
