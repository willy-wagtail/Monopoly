import { CardType } from "../../types/cards";
import {
  ChanceCardText,
  CreateChanceCard,
  CreateChanceDeck,
  CreateShuffledChanceDeck,
} from "../../types/cards/chance";
import { shuffle } from "../../util/array/shuffle";

export const createShuffledChanceDeck: CreateShuffledChanceDeck = () => {
  return shuffle(createChanceDeck());
};

const createChanceDeck: CreateChanceDeck = () => [
  createChanceCard("Advance to Go (Collect £200)"),
  createChanceCard("Advance to Trafalgar Square. If you pass Go, collect £200"),
  createChanceCard("Advance to Mayfair"),
  createChanceCard("Advance to Pall Mall. If you pass Go, collect £200"),
  createChanceCard(
    "Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled"
  ),
  createChanceCard(
    "Advance to the nearest Station. If unowned, you may buy it from the Bank. If owned, pay owner twice the rental to which they are otherwise entitled"
  ),
  createChanceCard(
    "Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown."
  ),
  createChanceCard("Bank pays you dividend of £50"),
  createChanceCard("Get Out of Jail Free"),
  createChanceCard("Go Back 3 Spaces"),
  createChanceCard(
    "Go to Jail. Go directly to Jail, do not pass Go, do not collect £200"
  ),
  createChanceCard(
    "Make general repairs on all your property. For each house pay £25. For each hotel pay £100"
  ),
  createChanceCard("Speeding fine £15"),
  createChanceCard(
    "Take a trip to Kings Cross Station. If you pass Go, collect £200"
  ),
  createChanceCard(
    "You have been elected Chairman of the Board. Pay each player £50"
  ),
  createChanceCard("Your building loan matures. Collect £150"),
];

const createChanceCard: CreateChanceCard = (text: ChanceCardText) => ({
  type: CardType.Chance,
  text,
});
