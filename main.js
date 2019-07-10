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

var displayName = document.querySelector('#p1');

var playerNameTwo = document.querySelector(".player-name-two");
var guessMessageOne = document.querySelector("#guess-message-one");
var guessMessageTwo = document.querySelector("#guess-message-two");
var clearButton = document.querySelector("#clear-button");
var resetButton = document.querySelector("#reset-button");
var randomNumber = Math.floor(Math.random() * (maxRange - minRange) + minRange);
var tooLow = "that's too low";
var tooHigh = "that's too high";
var correctGuess = "BOOM! ";
var attemptUserOne = 1;
var attemptUserTwo = 1;
var tooLow = "that's too low";
var tooHigh = "that's too high";
var correctGuess = "BOOM! ";
var scoreHistory = document.querySelector(".section-right");

clearButton.addEventListener("click", clearForms);
inputGuessOne.addEventListener("click", disableButtons);
inputGuessOne.addEventListener("keyup", disableButtons);
inputGuessTwo.addEventListener("click", disableButtons);
inputGuessTwo.addEventListener("keyup", disableButtons);
maxRange.addEventListener("click", enableUpdateButton);
maxRange.addEventListener("keyup", enableUpdateButton);
minRange.addEventListener("click", enableUpdateButton);
minRange.addEventListener("keyup", enableUpdateButton);
rangeButton.addEventListener("click", updateRangeValue);
resetButton.addEventListener("click", resetGame);
submitGuessButton.addEventListener("click", submitGuesses);
rangeButton.addEventListener("click", checkErrors);

function checkErrors() {
	if (minRange.value > maxRange.value) {
		minRange.style.borderColor = "red";
		maxRange.style.borderColor = "red";
	} else if (minRange.value == maxRange.value) {
		minRange.style.borderColor = "red";
		maxRange.style.borderColor = "red";
	} else {
		minRange.style.borderColor = "lightgray";
		maxRange.style.borderColor = "lightgray";
	}
}

function resetGame() {
	clearForms();
	updateRangeValue(event);
}

function clearForms() {
	inputGuessOne.value = "";
	inputGuessTwo.value = "";
}

// change the set range to what the users input
function updateRangeValue(event){
event.preventDefault();
minUser.innerText = minRange.value;
maxUser.innerText = maxRange.value;
}

// Change the challenger names and guess numbers to what the users input
function submitGuesses() {
 playerNameTwo.innerText = inputNameTwo.value;
 playerNameOne.innerText = inputNameOne.value;
 guessDisplayOne.innerHTML = inputGuessOne.value;
 guessDisplayTwo.innerHTML = inputGuessTwo.value;
 winnerOne();
 winnerTwo();
};

// create random number from the users min and max range
function updateRangeValue(event){
event.preventDefault();
minUser.innerText = minRange.value;
maxUser.innerText = maxRange.value;
randomNumber = Math.floor(Math.random() * (parseInt(maxRange.value) - parseInt(minRange.value)) + (parseInt(minRange.value)));
}

function enableUpdateButton() {
	if(minRange.value.length === 0 && maxRange.value.length === 0 || minRange.value.length === 0 || maxRange.value.length === 0 ) {
		rangeButton.disabled = true;
		rangeButton.style.backgroundColor = "lightgray"
	} else { 
		rangeButton.disabled = false;
		rangeButton.style.backgroundColor = "#808080"
	}
}

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
	scoreHistory.insertAdjacentHTML("afterbegin", `<article id="results" class="article-right">
	  			<header>
		  			<p><strong id="player-name-one">${inputNameOne.value}</strong></p>
		  			<p>VS</p>
		  			<p><strong id="player-name-two">${inputNameTwo.value}</strong></p>
		  		</header>
		  		<article>
		  			<h3>${inputNameOne.value}</h3>
		  			<h4>WINNER</h4>
		  		</article>
		  		<footer>
		  			<div class="guess-count">
			  			<p><strong>${attemptUserOne}</strong></p>
			  			<p>GUESSES</p>
		  			</div>
		  			<div class="minute-count">
			  			<p><strong>1.35</strong></p>
			  			<p>MINUTES</p>
		  			</div>
		  			<img class="x-icon" src="images/x-button.png"/>
		  		</footer>
	  		</article>`); 
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
	scoreHistory.insertAdjacentHTML("afterbegin", `<article id="results" class="article-right">
	  			<header>
		  			<p><strong id="player-name-one">${inputNameOne.value}</strong></p>
		  			<p>VS</p>
		  			<p><strong id="player-name-two">${inputNameTwo.value}</strong></p>
		  		</header>
		  		<article>
		  			<h3>${inputNameTwo.value}</h3>
		  			<h4>WINNER</h4>
		  		</article>
		  		<footer>
		  			<div class="guess-count">
			  			<p><strong>${attemptUserTwo}</strong></p>
			  			<p>GUESSES</p>
		  			</div>
		  			<div class="minute-count">
			  			<p><strong>1.35</strong></p>
			  			<p>MINUTES</p>
		  			</div>
		  			<img class="x-icon" src="images/x-button.png"/>
		  		</footer>
	  		</article>`); 
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





