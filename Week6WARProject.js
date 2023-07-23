
// Week 6 Assignment: WAR Card Game


class Card { // Creating a class for the cards
constructor(suit, value) {

this.suit = suit;
this.value = value;
    }
}


class Deck { // Creating a class for the deck
    constructor() {
        this.deck = [];
        this.suits = ['♠', '♥', '♣', '♦'];
        this.values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

        for (let suit of this.suits) {
            for (let value of this.values) {
                this.deck.push(new Card(suit, value));
            }
        }
    }

    shuffle() { // Creating a method to shuffle the deck
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
         }
        }

    dealCard(){  // Creating a method to deal a card
      return this.deck.pop()
      }
}
    
class Player { // Creating a class for a player
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    playCard() { // A method to play a card from the player
        return this.hand.pop();
    }
}

function startGame() { // A function to start the game, create the deck, and deal
    const deck = new Deck();
    const playerOne = new Player('Player 1');
    const playerTwo = new Player('Player 2');

    deck.shuffle(); // Shuffles the deck and deals 26 cards each
        for (let i = 0; i < 26; i++) {
            playerOne.hand.push(deck.dealCard());
            playerTwo.hand.push(deck.dealCard());
        }
        return {playerOne, playerTwo};

}

// Function to play a round of WAR
function playRound(playerOne, playerTwo) {
    const card1 = playerOne.playCard();
    const card2 = playerTwo.playCard();
        if (getCardValue(card1) > getCardValue(card2)) { // Determines the winner based on card value
            playerOne.score++;
        } else if (getCardValue(card1) < getCardValue(card2)) {
            playerTwo.score++;
            }
        }

       function getCardValue(card) { // Function to get the numeric value of a card
            return card.values.indexOf(card.value);
        }

function playWar() { // Function to play the game of WAR
    const { playerOne, playerTwo } = startGame();
playerOne.score = 0;
playerTwo.score = 0;
    for (let i =0; i < 26; i++) { // Plays 26 rounds of the game
        playRound(playerOne, playerTwo);
    }
    console.log(`${playerOne.name}'s score: ${playerOne.score}`);
    console.log(`${playerTwo.name}'s score: ${playerTwo.score}`);
        if (playerOne.score > playerTwo.score) {
            console.log(`${playerOne.name} wins!!!`);
        } else if (playerOne.score < playerTwo.score) {
            console.log(`${player2.name} wins!!!`);
        } else {
            console.log('Tie Game!');
             }
        }

    startGame();
