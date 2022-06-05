import { Card } from './card';

const shuffle = (deck: Card[]) => {
  let currentIndex = deck.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
  }
  return deck;
}

let orderedDeck: Card[] = [
  { id: 1, value: 'Ace', suit: 'Spades', KValue: 1, QValue: 1, frontImage: '../assets/cardImages/s1.png' },
  { id: 2, value: 'Two', suit: 'Spades', KValue: 2, QValue: 2, frontImage: '../assets/cardImages/s2.png' },
  { id: 3, value: 'Three', suit: 'Spades', KValue: 3, QValue: 3, frontImage: '../assets/cardImages/s3.png' },
  { id: 4, value: 'Four', suit: 'Spades', KValue: 4, QValue: 4, frontImage: '../assets/cardImages/s4.png' },
  { id: 5, value: 'Five', suit: 'Spades', KValue: 5, QValue: 5, frontImage: '../assets/cardImages/s5.png' },
  { id: 6, value: 'Six', suit: 'Spades', KValue: 6, QValue: 6, frontImage: '../assets/cardImages/s6.png' },
  { id: 7, value: 'Seven', suit: 'Spades', KValue: 7, QValue: 7, frontImage: '../assets/cardImages/s7.png' },
  { id: 8, value: 'Eight', suit: 'Spades', KValue: 8, QValue: 8, frontImage: '../assets/cardImages/s8.png' },
  { id: 9, value: 'Nine', suit: 'Spades', KValue: 9, QValue: 9, frontImage: '../assets/cardImages/s9.png' },
  { id: 10, value: 'Ten', suit: 'Spades', KValue: 10, QValue: 10, frontImage: '../assets/cardImages/s10.png' },
  { id: 11, value: 'Jack', suit: 'Spades', KValue: 0, QValue: 0, frontImage: '../assets/cardImages/sJ.png' },
  { id: 12, value: 'Queen', suit: 'Spades', KValue: 0, QValue: 10, frontImage: '../assets/cardImages/sQ.png' },
  { id: 13, value: 'King', suit: 'Spades', KValue: 10, QValue: 0, frontImage: '../assets/cardImages/sK.png' },
  { id: 14, value: 'Ace', suit: 'Hearts', KValue: 1, QValue: 1, frontImage: '../assets/cardImages/h1.png' },
  { id: 15, value: 'Two', suit: 'Hearts', KValue: 2, QValue: 2, frontImage: '../assets/cardImages/h2.png' },
  { id: 16, value: 'Three', suit: 'Hearts', KValue: 3, QValue: 3, frontImage: '../assets/cardImages/h3.png' },
  { id: 17, value: 'Four', suit: 'Hearts', KValue: 4, QValue: 4, frontImage: '../assets/cardImages/h4.png' },
  { id: 18, value: 'Five', suit: 'Hearts', KValue: 5, QValue: 5, frontImage: '../assets/cardImages/h5.png' },
  { id: 19, value: 'Six', suit: 'Hearts', KValue: 6, QValue: 6, frontImage: '../assets/cardImages/h6.png' },
  { id: 20, value: 'Seven', suit: 'Hearts', KValue: 7, QValue: 7, frontImage: '../assets/cardImages/h7.png' },
  { id: 21, value: 'Eight', suit: 'Hearts', KValue: 8, QValue: 8, frontImage: '../assets/cardImages/h8.png' },
  { id: 22, value: 'Nine', suit: 'Hearts', KValue: 9, QValue: 9, frontImage: '../assets/cardImages/h9.png' },
  { id: 23, value: 'Ten', suit: 'Hearts', KValue: 10, QValue: 10, frontImage: '../assets/cardImages/h10.png' },
  { id: 24, value: 'Jack', suit: 'Hearts', KValue: 0, QValue: 0, frontImage: '../assets/cardImages/hJ.png' },
  { id: 25, value: 'Queen', suit: 'Hearts', KValue: 0, QValue: 10, frontImage: '../assets/cardImages/hQ.png' },
  { id: 26, value: 'King', suit: 'Hearts', KValue: 10, QValue: 0, frontImage: '../assets/cardImages/hK.png' },
  { id: 27, value: 'Ace', suit: 'Diamonds', KValue: 1, QValue: 1, frontImage: '../assets/cardImages/d1.png' },
  { id: 28, value: 'Two', suit: 'Diamonds', KValue: 2, QValue: 2, frontImage: '../assets/cardImages/d2.png' },
  { id: 29, value: 'Three', suit: 'Diamonds', KValue: 3, QValue: 3, frontImage: '../assets/cardImages/d3.png' },
  { id: 30, value: 'Four', suit: 'Diamonds', KValue: 4, QValue: 4, frontImage: '../assets/cardImages/d4.png' },
  { id: 31, value: 'Five', suit: 'Diamonds', KValue: 5, QValue: 5, frontImage: '../assets/cardImages/d5.png' },
  { id: 32, value: 'Six', suit: 'Diamonds', KValue: 6, QValue: 6, frontImage: '../assets/cardImages/d6.png' },
  { id: 33, value: 'Seven', suit: 'Diamonds', KValue: 7, QValue: 7, frontImage: '../assets/cardImages/d7.png' },
  { id: 34, value: 'Eight', suit: 'Diamonds', KValue: 8, QValue: 8, frontImage: '../assets/cardImages/d8.png' },
  { id: 35, value: 'Nine', suit: 'Diamonds', KValue: 9, QValue: 9, frontImage: '../assets/cardImages/d9.png' },
  { id: 36, value: 'Ten', suit: 'Diamonds', KValue: 10, QValue: 10, frontImage: '../assets/cardImages/d10.png' },
  { id: 37, value: 'Jack', suit: 'Diamonds', KValue: 0, QValue: 0, frontImage: '../assets/cardImages/dJ.png' },
  { id: 38, value: 'Queen', suit: 'Diamonds', KValue: 0, QValue: 10, frontImage: '../assets/cardImages/dQ.png' },
  { id: 39, value: 'King', suit: 'Diamonds', KValue: 10, QValue: 0, frontImage: '../assets/cardImages/dK.png' },
  { id: 40, value: 'Ace', suit: 'Clubs', KValue: 1, QValue: 1, frontImage: '../assets/cardImages/c1.png' },
  { id: 41, value: 'Two', suit: 'Clubs', KValue: 2, QValue: 2, frontImage: '../assets/cardImages/c2.png' },
  { id: 42, value: 'Three', suit: 'Clubs', KValue: 3, QValue: 3, frontImage: '../assets/cardImages/c3.png' },
  { id: 43, value: 'Four', suit: 'Clubs', KValue: 4, QValue: 4, frontImage: '../assets/cardImages/c4.png' },
  { id: 44, value: 'Five', suit: 'Clubs', KValue: 5, QValue: 5, frontImage: '../assets/cardImages/c5.png' },
  { id: 45, value: 'Six', suit: 'Clubs', KValue: 6, QValue: 6, frontImage: '../assets/cardImages/c6.png' },
  { id: 46, value: 'Seven', suit: 'Clubs', KValue: 7, QValue: 7, frontImage: '../assets/cardImages/c7.png' },
  { id: 47, value: 'Eight', suit: 'Clubs', KValue: 8, QValue: 8, frontImage: '../assets/cardImages/c8.png' },
  { id: 48, value: 'Nine', suit: 'Clubs', KValue: 9, QValue: 9, frontImage: '../assets/cardImages/c9.png' },
  { id: 49, value: 'Ten', suit: 'Clubs', KValue: 10, QValue: 10, frontImage: '../assets/cardImages/c10.png' },
  { id: 50, value: 'Jack', suit: 'Clubs', KValue: 0, QValue: 0, frontImage: '../assets/cardImages/cJ.png' },
  { id: 51, value: 'Queen', suit: 'Clubs', KValue: 0, QValue: 10, frontImage: '../assets/cardImages/cQ.png' },
  { id: 52, value: 'King', suit: 'Clubs', KValue: 10, QValue: 0, frontImage: '../assets/cardImages/cK.png' },
  { id: 53, value: 'Joker', suit: 'Joker', KValue: 0, QValue: 0, frontImage: '../assets/cardImages/BJ.png' },
  { id: 54, value: 'Joker', suit: 'Joker', KValue: 0, QValue: 0, frontImage: '../assets/cardImages/RJ.png' },
];

export const DECK: Card[] = shuffle(orderedDeck)
