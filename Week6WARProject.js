
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


        //*
       // for (let suit of this.suits) {
       //     for (let value of this.values) {
      //          this.deck.push(new Card(suit, value));
       //     }
          } 
    

    createDeck() {
        for(let i = 0; i < this.suits.length; i++) {
            for(let j = 0; j < this.values.length; j++) {
                let card = {
                    name: `${this.values[j]} of ${this.suits[i]}`,
                    value: j + 1
            }
                this.deck.push(card);


            }
        }
    }
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--)  {
         let j = Math.floor(Math.random() * (i + 1));
     
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
     }
}

const deck = new Deck
deck.createDeck()
deck.shuffleDeck()

console.log(deck.deck);

class Game {
    constructor() {
        this.player1 =  {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 =  {
            name: 'Player 2',
            score: 0,
            hand: []
        }
    }
    playGame() { 
        const deck = new Deck;
        deck.createDeck();
        deck.shuffleDeck();

        while(deck.deck.length !== 0) {
            this.player1.hand.push(deck.deck.shift());
            this.player2.hand.push(deck.deck.shift());
        }
        console.log(this.player1.hand)
        console.log(this.player2.hand)
        for (let i = 0; i< this.player1.hand.length; i++) {

            if (this.player1.hand[i].value > this.player2.hand[i].value) {
                this.player1.score ++
                console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 1 scores!
                Current Score: P1: ${this.player1.score} - P2: ${this.player2.score}
                 `)
            } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
                this.player2.score ++ 
                console.log( `
                    P1 Card: ${this.player1.hand[i].name}
                    P2 Card: ${this.player2.hand[i].name}
                    Player 2 scores!
                    Current Score: P1: ${this.player1.score} - P2: ${this.player2.score}`);
            } else {
                console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Tie Round!
                Current Score: P1: ${this.player1.score} - P2: ${this.player2.score}`);
            }
        }
        if (this.player1.score > this.player2.score) {
            console.log(`Player 1 wins the game! 
            Final:  P1:  ${this.player1.score}
                    P2:  ${this.player2.score}
            `)
        } else if (this.player2.score > this.player1.score) {
            console.log(`Player 2 wins the game!
            Final:  P1:  ${this.player1.score}
                    P2:  ${this.player2.score}
            `);
        } else {
            console.log('Tie Game');
        }

    }

 }

    const game = new Game;
    game.playGame();








