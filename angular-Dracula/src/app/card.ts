
export interface Card {
  id: number;
  value: string;
  suit: string;
  frontImage: string;
}

export const emptyCard: Card = {
  id: 0,
  value: "empty",
  suit: "empty",
  frontImage: "../assets/cardImages/Empty.png"
}
