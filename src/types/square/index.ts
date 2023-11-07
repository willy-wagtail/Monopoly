import { Chance } from "./Chance";
import { CommunityChest } from "./CommunityChest";
import { FreeParking } from "./FreeParking";
import { GoToJail } from "./GoToJail";
import { InJailOrJustVisiting } from "./InJailOrJustVisiting";
import { Utility } from "./Utility";
import { Go } from "./Go";
import { Property } from "./Property";
import { Station } from "./Station";
import { Tax } from "./Tax";

export enum SquareType {
  Go,
  Property,
  Tax,
  Station,
  InJailOrJustVisiting,
  GoToJail,
  FreeParking,
  Chance,
  CommunityChest,
  Utility,
}

export type Square =
  | Go
  | Property
  | Tax
  | Station
  | InJailOrJustVisiting
  | GoToJail
  | FreeParking
  | Chance
  | CommunityChest
  | Utility;

export type Squares = Square[];

export type CreateSquares = () => Squares;
