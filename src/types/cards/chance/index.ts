import { CardType } from "..";

export type ChanceCard = {
  type: CardType.Chance;
  text: ChanceCardText;
};

export type ChanceDeck = ChanceCard[];

export type ShuffledChanceDeck = ChanceDeck;

export type CreateChanceCard = (text: ChanceCardText) => ChanceCard;

export type CreateChanceDeck = () => ChanceDeck;

export type CreateShuffledChanceDeck = () => ShuffledChanceDeck;

export type ChanceCardText =
  | "Advance to Go (Collect £200)"
  | "Advance to Trafalgar Square. If you pass Go, collect £200"
  | "Advance to Mayfair"
  | "Advance to Pall Mall. If you pass Go, collect £200"
  | "Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled"
  | "Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown."
  | "Bank pays you dividend of £50"
  | "Get Out of Jail Free"
  | "Go Back 3 Spaces"
  | "Go to Jail. Go directly to Jail, do not pass Go, do not collect £200"
  | "Make general repairs on all your property. For each house pay £25. For each hotel pay £100"
  | "Speeding fine £15"
  | "Take a trip to Kings Cross Station. If you pass Go, collect £200"
  | "You have been elected Chairman of the Board. Pay each player £50"
  | "Your building loan matures. Collect £150";
