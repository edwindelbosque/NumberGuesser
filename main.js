// --variables
var minRange = document.getElementById("minRange");
var maxRange = document.getElementById("maxRange");
var rangeButton = document.querySelector('.updateRange');
var minUser = document.querySelector('.minUser');
var maxUser = document.querySelector('.maxUser');
var inputNameOne = document.querySelector("#input-name-one");
var inputNameTwo = document.querySelector("#input-name-two");
var inputGuessOne = document.querySelector("#input-guess-one");
var inputGuessTwo = document.querySelector("#input-guess-two");
var submitGuessButton = document.querySelector("#submit-guess-button");
var guessDisplayOne = document.querySelector("#guess-display-one")
var guessDisplayTwo = document.querySelector("#guess-display-two")
var playerNameOne = document.querySelector(".player-name-one");
var playerNameTwo = document.querySelector(".player-name-two");
var guessMessageOne = document.querySelector("#guess-message-one");
var guessMessageTwo = document.querySelector("#guess-message-two");
var randomNumber = Math.floor(Math.random() * (maxRange - minRange) + minRange);
var attemptUserOne = 1;
var attemptUserTwo = 1;
var tooLow = "that's too low";
var tooHigh = "that's too high";
var correctGuess = "BOOM! ";


// --event listeners
submitGuessButton.addEventListener("click", displayInformation);
rangeButton.addEventListener('click', updateRangeValue);

// --functions
// change the set range to what the users input
function updateRangeValue(event){
event.preventDefault();
minUser.innerText = minRange.value;
maxUser.innerText = maxRange.value;
}

// Change the challenger names and guess numbers to what the users input
function displayInformation() {
 playerNameTwo.innerHTML = inputNameTwo.value;
 playerNameOne.innerHTML = inputNameOne.value;
 guessDisplayOne.innerHTML = inputGuessOne.value;
 guessDisplayTwo.innerHTML = inputGuessTwo.value;
};

// create random number from the users min and max range
function updateRangeValue(event){
event.preventDefault();
minUser.innerText = minRange.value;
maxUser.innerText = maxRange.value;
randomNumber = Math.floor(Math.random() * (parseInt(maxRange.value) - parseInt(minRange.value)) + (parseInt(minRange.value)));
}

// let the users play and guess the correct number
// player 1
submitGuessButton.addEventListener('click', function() { 
if (inputGuessOne.value == randomNumber) {	 
guessMessageOne.innerHTML = correctGuess
			+ attemptUserOne + " Attemps ";
} 
else if(inputGuessOne.value > randomNumber)
{
	attemptUserOne++; 
	guessMessageOne.innerHTML = tooHigh;
} 
else
{ 
	attemptUserOne++; 
	guessMessageOne.innerHTML = tooLow;
}});

// player 2
submitGuessButton.addEventListener('click', function() { 
if (inputGuessTwo.value == randomNumber) {	 
guessMessageTwo.innerHTML = correctGuess
			+ attemptUserTwo + " Attemps ";
} 
else if(inputGuessTwo.value > randomNumber)
{
	attemptUserTwo++; 
	guessMessageTwo.innerHTML = tooHigh;
} 
else
{ 
	attemptUserTwo++; 
	guessMessageTwo.innerHTML = tooLow;
}});