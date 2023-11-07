import { SquareType, CreateSquares } from "../../domain/board/square";
import { CreateChance } from "../../domain/board/square/Chance";
import { CreateCommunityChest } from "../../domain/board/square/CommunityChest";
import { CreateFreeParking } from "../../domain/board/square/FreeParking";
import { CreateGo } from "../../domain/board/square/Go";
import { CreateGoToJail } from "../../domain/board/square/GoToJail";
import { CreateInJailOrJustVisiting } from "../../domain/board/square/InJailOrJustVisiting";
import {
  CreateProperty,
  PropertyColour,
} from "../../domain/board/square/Property";
import { CreateStation } from "../../domain/board/square/Station";
import { CreateTax } from "../../domain/board/square/Tax";
import { CreateUtility } from "../../domain/board/square/Utility";

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
  createProperty("Red", "Vince Street", 200),
  createChance(),
  createProperty("Red", "Vince Street", 200),
  createProperty("Red", "Vince Street", 200),

  createStation("Fenchurch Street station", 200),
  createProperty("Yellow", "Leicester Square", 260),
  createProperty("Yellow", "Coventry Street", 260),
  createUtility("Water Works", 150),
  createProperty("Yellow", "Piccadilly", 280),

  createGoToJail(),
  createProperty("Green", "Piccadilly", 280),
  createProperty("Green", "Piccadilly", 280),
  createCommunityChest(),
  createProperty("Green", "Piccadilly", 280),

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
