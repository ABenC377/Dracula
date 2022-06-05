
export interface Card {
  id: number;
  value: string;
  suit: string;
  KValue: number;
  QValue: number;
  frontImage: string;
}

export const emptyCard: Card = {
  id: 0,
  value: "empty",
  suit: "empty",
  KValue: 0,
  QValue: 0,
  frontImage: "../assets/cardImages/Empty.png"
}
