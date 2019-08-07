class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value.toString();
        this.image = value+suit[0]+".png";
    }
}