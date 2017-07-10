console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king"; unit 7 assignment

console.log("user flipped" + cardOne);

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("user flipped " + cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("user flipped " + cardTwo);



if (cardsInPlay.length === 2) //if statement
{
  console.log("you have selected two cards");

  if (cardsInPlay[0] === cardsInPlay[1]) {
     alert("You found a match!");
   } else {
     alert("Sorry, try again");
   }
}
