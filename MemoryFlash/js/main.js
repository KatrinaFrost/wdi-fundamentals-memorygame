console.log('Up and running!');

var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

// create array to store cards
var cardsInPlay = [];
var score = 0;

var flipCard = function () {

  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage);

  console.log('User flipped ' + cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  cardsInPlay.push(cards[cardId].rank);

  checkForMatch();
};

//start function - createBoard
var createBoard = function(){

  for (var i = 0; i < cards.length; i++) {

    var cardElement = document.createElement('img');

    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

// check for a match
function checkForMatch() {

  if (cardsInPlay.length === 2) {

  } else if (cardsInPlay[0] === cardsInPlay[1]) {

    alert('You found a match!');

    updateScore();

  } else {

    alert('Sorry try again');
  }
};

function updateScore(){

  score ++;
  document.getElementById('score-board').innerHTML = score;
}

function reset(){

  cardsInPlay = []; // stores the cards that have been turned

  var cardElements = document.getElementById('game-board').children; // creating a ref to the cards

  for (var i = 0; i < cardElements.length; i++) {
      cardElements[i].setAttribute('src', 'images/back.png');
  }
};

createBoard();
