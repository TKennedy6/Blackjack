const deckOfCards = {
    spades: ['king', 'queen', 'jack', 'ace', 2, 3, 4, 5, 6, 7, 8, 9, 10],
    clubs: ['king', 'queen', 'jack', 'ace', 2, 3, 4, 5, 6, 7, 8, 9, 10],
    hearts: ['king', 'queen', 'jack', 'ace', 2, 3, 4, 5, 6, 7, 8, 9, 10],
    diamonds: ['king', 'queen', 'jack', 'ace', 2, 3, 4, 5, 6, 7, 8, 9, 10]
}

const suits = Object.keys(deckOfCards);


const playerRandomSuit = suits[Math.floor(Math.random() * suits.length)];

const playerCards = deckOfCards[playerRandomSuit];
const playerRandomCard = playerCards[Math.floor(Math.random() * playerCards.length)];

let playerCardValue;
if (playerRandomCard === 'king' || playerRandomCard === 'queen' || playerRandomCard === 'jack') {
    playerCardValue = 10;
} else if (playerRandomCard === 'ace') {
    playerCardValue = 11; // or 1 if total would bust
} else {
    playerCardValue = playerRandomCard;
}

const dealerRandomSuit = suits[Math.floor(Math.random() * suits.length)];

const dealerCards = deckOfCards[dealerRandomSuit];
const dealerRandomCard = dealerCards[Math.floor(Math.random() * dealerCards.length)];

let dealerCardValue;
if (dealerRandomCard === 'king' || dealerRandomCard === 'queen' || dealerRandomCard === 'jack') {
    dealerCardValue = 10;
} else if (dealerRandomCard === 'ace') {
    dealerCardValue = 11; // or 1 if total would bust
} else {
    dealerCardValue = dealerRandomCard;
}

let playerHand = {
    suit: playerRandomSuit,
    card: playerRandomCard,
    value: playerCardValue
}
let dealerHand = {
    suit: dealerRandomSuit,
    card: dealerRandomCard,
    value: dealerCardValue
};

console.log(playerHand)
console.log(dealerHand)