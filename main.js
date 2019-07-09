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
var clearButton = document.querySelector("#clear-button");
var resetButton = document.querySelector("#reset-button");

// --event listeners
submitGuessButton.addEventListener("click", submitGuesses);
rangeButton.addEventListener("click", updateRangeValue);
clearButton.addEventListener("click", clearForms);
resetButton.addEventListener("click", resetGame);
submitGuessButton.addEventListener("click", winnerOne);
submitGuessButton.addEventListener("click", winnerTwo);
// resetButton.addEventListener("keypress", disableButtons);
// clearButton.addEventListener("keypress", disableButtons);

function resetGame() {
	clearForms();
	updateRangeValue(event);
}

function clearForms() {
	inputGuessOne.value = "";
	inputGuessTwo.value = "";
}



// --functions
// change the set range to what the users input
function updateRangeValue(event){
event.preventDefault();
minUser.innerText = minRange.value;
maxUser.innerText = maxRange.value;
}

// Change the challenger names and guess numbers to what the users input
function submitGuesses() {
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


minRange.addEventListener("keyup", enableUpdateButton);
maxRange.addEventListener("keyup", enableUpdateButton);
minRange.addEventListener("click", enableUpdateButton);
maxRange.addEventListener("click", enableUpdateButton);

function enableUpdateButton() {
	if(minRange.value.length === 0 && maxRange.value.length === 0 || minRange.value.length === 0 || maxRange.value.length === 0 ) {
		rangeButton.disabled = true;
		rangeButton.style.backgroundColor = "lightgray"
	} else { 
		rangeButton.disabled = false;
		rangeButton.style.backgroundColor = "#808080"
	}
}


inputGuessOne.addEventListener("keyup", disableButtons);
inputGuessTwo.addEventListener("keyup", disableButtons);
inputGuessOne.addEventListener("click", disableButtons);
inputGuessTwo.addEventListener("click", disableButtons);

function disableButtons() {
	if(inputGuessOne.value.length === 0 && inputGuessTwo.value.length === 0 || inputGuessTwo.value.length === 0 || inputGuessOne.value.length === 0) {
		clearButton.disabled = true;
		resetButton.disabled = true;
		clearButton.style.backgroundColor = "lightgray";
		resetButton.style.backgroundColor = "lightgray";
	} else {
		clearButton.disabled = false;
		resetButton.disabled = false;
		clearButton.style.backgroundColor = "#808080";
		resetButton.style.backgroundColor = "#808080";
	} 
}






// let the users play and guess the correct number
// player 1
function winnerOne() {
if (inputGuessOne.value == randomNumber) {	 
guessMessageOne.innerHTML = correctGuess
			resetGame();
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
}};

// player 2
function winnerTwo() {
if (inputGuessTwo.value == randomNumber) {	 
guessMessageTwo.innerHTML = correctGuess
			resetGame();
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
}};