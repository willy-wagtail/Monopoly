import { SquareType, CreateSquares } from "../types/square";
import { CreateChance } from "../types/square/Chance";
import { CreateCommunityChest } from "../types/square/CommunityChest";
import { CreateFreeParking } from "../types/square/FreeParking";
import { CreateGo } from "../types/square/Go";
import { CreateGoToJail } from "../types/square/GoToJail";
import { CreateInJailOrJustVisiting } from "../types/square/InJailOrJustVisiting";
import { CreateProperty, PropertyColour } from "../types/square/Property";
import { CreateStation } from "../types/square/Station";
import { CreateTax } from "../types/square/Tax";
import { CreateUtility } from "../types/square/Utility";

export const createSquares: CreateSquares = () => [
  createGo(),
  createProperty("Brown", "Old Kent Road", 60),
  createCommunityChest(),
  createProperty("Brown", "White Chapel Road", 60),
  createTax("Income Tax", 200),

  createStation("Kings Cross Station", 200),
  createProperty("Light Blue", "The Angel, Islington", 100),
  createChance(),
  createProperty("Light Blue", "Euston Road", 100),
  createProperty("Light Blue", "Pentonville Road", 120),

  createInJailOrJustVisiting(),
  createProperty("Pink", "Pall Mall", 140),
  createUtility("Electric Company", 150),
  createProperty("Pink", "Whitehall", 140),
  createProperty("Pink", "Northumberland Avenue", 160),

  createStation("Marylebone station", 200),
  createProperty("Orange", "Bow Street", 180),
  createCommunityChest(),
  createProperty("Orange", "Marlborough Street", 180),
  createProperty("Orange", "Vine Street", 200),

  createFreeParking(),
  createProperty("Red", "Strand", 220),
  createChance(),
  createProperty("Red", "Fleet Street", 220),
  createProperty("Red", "Trafalgar Square", 240),

  createStation("Fenchurch Street station", 200),
  createProperty("Yellow", "Leicester Square", 260),
  createProperty("Yellow", "Coventry Street", 260),
  createUtility("Water Works", 150),
  createProperty("Yellow", "Piccadilly", 280),

  createGoToJail(),
  createProperty("Green", "Regent Street", 300),
  createProperty("Green", "Oxford Street", 300),
  createCommunityChest(),
  createProperty("Green", "Bond Street", 320),

  createStation("Liverpool Street station", 200),
  createChance(),
  createProperty("Dark Blue", "Park Lane", 350),
  createTax("SuperTax", 100),
  createProperty("Dark Blue", "Piccadilly", 400),
];

const createGo: CreateGo = () => ({ type: SquareType.Go });

const createChance: CreateChance = () => ({ type: SquareType.Chance });

const createCommunityChest: CreateCommunityChest = () => ({
  type: SquareType.CommunityChest,
});

const createFreeParking: CreateFreeParking = () => ({
  type: SquareType.FreeParking,
});

const createGoToJail: CreateGoToJail = () => ({
  type: SquareType.GoToJail,
});

const createInJailOrJustVisiting: CreateInJailOrJustVisiting = () => ({
  type: SquareType.InJailOrJustVisiting,
});

const createProperty: CreateProperty = (
  colour: PropertyColour,
  streetName: string,
  price: number
) => ({
  type: SquareType.Property,
  colour,
  streetName,
  price,
});

const createStation: CreateStation = (name: string, price: number) => ({
  type: SquareType.Station,
  name,
  price,
});

const createTax: CreateTax = (name: string, amount: number) => ({
  type: SquareType.Tax,
  name,
  amount,
});

const createUtility: CreateUtility = (name: string, price: number) => ({
  type: SquareType.Utility,
  name,
  price,
});
