export type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

export type RollDice = () => DiceRoll;

export type RollPairOfDice = () => [DiceRoll, DiceRoll];
