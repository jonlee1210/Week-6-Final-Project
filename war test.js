const { expect } = require("chai");
const Card = require("./Card"); 

describe("Card", () => {
  it("should create a card with suit and value", () => {
    const card = new Card("♥", "9");
    expect(card.suit).to.equal("♥");
    expect(card.value).to.equal("9");
  });
});


const { expect } = require("chai");
const Deck = require("./Deck"); 

describe("Deck", () => {
  it("should create a deck with 52 cards", () => {
    const deck = new Deck();
    expect(deck.deck).to.have.lengthOf(52);
  });

  it("should deal a card from the deck", () => {
    const deck = new Deck();
    const initialDeckSize = deck.deck.length;
    const card = deck.dealCard();

    expect(card).to.be.an.instanceOf(Card);
    expect(deck.deck).to.have.lengthOf(initialDeckSize - 1);
  });

  it("should shuffle the deck", () => {
    const deck = new Deck();
    const initialDeckOrder = deck.deck.slice();

    deck.shuffle();
    expect(deck.deck).to.not.deep.equal(initialDeckOrder);
  });
});
