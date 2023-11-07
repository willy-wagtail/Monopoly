import { shuffle } from "..";
import { CardType } from "../../types/cards";
import {
  CommunityChestCardText,
  CreateCommunityChestCard,
  CreateCommunityChestDeck,
  CreateShuffledCommunityChestDeck,
} from "../../types/cards/community-chest";

export const createShuffledCommunityChestDeck: CreateShuffledCommunityChestDeck =
  () => shuffle(createCommunityChestDeck());

const createCommunityChestDeck: CreateCommunityChestDeck = () => [
  createCommunityChestCard("Advance to Go (Collect £200)"),
  createCommunityChestCard("Bank error in your favour. Collect £200"),
  createCommunityChestCard("Doctor’s fee. Pay £50"),
  createCommunityChestCard("From sale of stock you get £50"),
  createCommunityChestCard("Get Out of Jail Free"),
  createCommunityChestCard(
    "Go to Jail. Go directly to jail, do not pass Go, do not collect £200"
  ),
  createCommunityChestCard("Holiday fund matures. Receive £100"),
  createCommunityChestCard("Income tax refund. Collect £20"),
  createCommunityChestCard(
    "It is your birthday. Collect £10 from every player"
  ),
  createCommunityChestCard("Life insurance matures. Collect £100"),
  createCommunityChestCard("Pay hospital fees of £100"),
  createCommunityChestCard("Pay school fees of £50"),
  createCommunityChestCard("Receive £25 consultancy fee"),
  createCommunityChestCard(
    "You are assessed for street repairs. £40 per house. £115 per hotel"
  ),
  createCommunityChestCard(
    "You have won second prize in a beauty contest. Collect £10"
  ),
  createCommunityChestCard("You inherit £100"),
];

const createCommunityChestCard: CreateCommunityChestCard = (
  text: CommunityChestCardText
) => ({
  type: CardType.Community_Chest,
  text,
});
