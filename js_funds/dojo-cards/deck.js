const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

class Deck {
  deck = [];
  // TODO: constructor should place all 52 cards into the deck array 
  constructor(){
    for (let suit = 0; suit < suits.length; suit++){
      for (let value = 0; value < values.length; value++){
        this.deck.push(new Card(suits[suit], values[value]))
      }
    }
  }
  reset(){
    this.deck = []
    for (let suit = 0; suit < suits.length; suit++){
      for (let value = 0; value < values.length; value++){
        this.deck.push(new Card(suits[suit], values[value]))
      }
    }
  }
  // TODO: suffle should randomize the cards order in the deck
  shuffle(){
    var currentIndex = this.deck.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.deck[currentIndex];
    this.deck[currentIndex] = this.deck[randomIndex];
    this.deck[randomIndex] = temporaryValue;
    }
  return this.deck;
  }
  // TODO: deal should remove the top card from the deck and return it
  deal(){
    return this.deck.pop()
  }
  }