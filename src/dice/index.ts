import { DiceRoll, RollDice, RollPairOfDice } from "../types/dice";

const isDiceRoll = (value: number): value is DiceRoll => {
  return (
    value === 1 ||
    value === 2 ||
    value === 3 ||
    value === 4 ||
    value === 5 ||
    value === 6
  );
};

export const rollDice: RollDice = () => {
  const number = Math.floor(Math.random() * 6 + 1);

  if (!isDiceRoll(number)) {
    throw Error(
      `Dice roll should return integer between 1 and 6 but was ${number}.`
    );
  }

  return number;
};

export const rollPairOfDice: RollPairOfDice = () => [rollDice(), rollDice()];
