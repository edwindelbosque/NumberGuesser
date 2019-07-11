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
var clearButton = document.querySelector("#clear-button");
var resetButton = document.querySelector("#reset-button");
var	randomNumber = Math.floor(Math.random() * (parseInt(maxRange.value) - parseInt(minRange.value)) + (parseInt(minRange.value)));
var tooLow = "that's too low";
var tooHigh = "that's too high";
var correctGuess = "BOOM! ";
var attemptUserOne = 1;
var attemptUserTwo = 1;
var tooLow = "that's too low";
var tooHigh = "that's too high";
var correctGuess = "BOOM! ";
var scoreHistory = document.querySelector(".section-right");
var invalidRange = document.querySelector("#range-error");
var nameOneError = document.querySelector("#name-one-error");
var nameTwoError = document.querySelector("#name-two-error");
var guessOneError = document.querySelector("#guess-one-error");
var guessTwoError = document.querySelector("#guess-two-error");

clearButton.addEventListener("click", clearForms);
inputGuessOne.addEventListener("click", disableButtons);
inputGuessOne.addEventListener("keyup", disableButtons);
inputGuessTwo.addEventListener("click", disableButtons);
inputGuessTwo.addEventListener("keyup", disableButtons);
maxRange.addEventListener("click", enableUpdateButton);
maxRange.addEventListener("keyup", enableUpdateButton);
minRange.addEventListener("click", enableUpdateButton);
minRange.addEventListener("keyup", enableUpdateButton);
resetButton.addEventListener("click", resetGame);
submitGuessButton.addEventListener("click", handleSubmitGuess);
rangeButton.addEventListener("click", handleRange)

function handleSubmitGuess() {
	guessErrorAlerts();
	if (nameOneStatus == true && nameTwoStatus == true && guessOneStatus == true && guessTwoStatus == true) {
		submitGuesses();
	}
}

function handleRange() {
	
	checkErrors(event);
	if (verifyRange == true) {
		updateRangeValue(event);
	}
};

function guessErrorAlerts() {

	if (inputNameOne.value == "") {
		nameOneError.classList.add("toggle-on");
		nameOneError.classList.remove("toggle-off");
		inputNameOne.classList.add("error-border");
		nameOneStatus = false;
	} else {
		nameOneError.classList.add("toggle-off");
		nameOneError.classList.remove("toggle-on");
		inputNameOne.classList.remove("error-border");
		nameOneStatus = true;
	} 	if (inputNameTwo.value == "") {
		nameTwoError.classList.add("toggle-on");
		nameTwoError.classList.remove("toggle-off");
		inputNameTwo.classList.add("error-border");
		nameTwoStatus = false;
	} else {
		nameTwoError.classList.add("toggle-off");
		nameTwoError.classList.remove("toggle-on");
		inputNameTwo.classList.remove("error-border");
		nameTwoStatus = true;
	} 	if (inputGuessOne.value == "" || inputGuessOne.value > maxRange.value || inputGuessOne.value < minRange.value) {
		guessOneError.classList.add("toggle-on");
		guessOneError.classList.remove("toggle-off");
		inputGuessOne.classList.add("error-border");
		guessOneStatus = false;
	} else {
		guessOneError.classList.add("toggle-off");
		guessOneError.classList.remove("toggle-on");
		inputGuessOne.classList.remove("error-border");
		guessOneStatus = true;
	}		if (inputGuessTwo.value == "" || inputGuessTwo.value > maxRange.value || inputGuessTwo.value < minRange.value) {
		guessTwoError.classList.add("toggle-on");
		guessTwoError.classList.remove("toggle-off");
		inputGuessTwo.classList.add("error-border");
		guessTwoStatus = false;
	} else {
		guessTwoError.classList.add("toggle-off");
		guessTwoError.classList.remove("toggle-on");
		inputGuessTwo.classList.remove("error-border");
		guessTwoStatus = true;
	}
};

function checkErrors(event) {

	if (parseInt(document.getElementById("minRange").value) > parseInt(document.getElementById("maxRange").value)) {
		event.preventDefault();
		minRange.classList.add("error-border");
		maxRange.classList.add("error-border");
		invalidRange.classList.add("toggle-on");
		invalidRange.classList.remove("toggle-off");
		verifyRange = false;
	} else {
		event.preventDefault();
		minRange.classList.remove("error-border");
		maxRange.classList.remove("error-border");
		invalidRange.classList.add("toggle-off");
		invalidRange.classList.remove("toggle-on");
		verifyRange = true;
	}
}

function updateRangeValue(event) {
		event.preventDefault();
		minUser.innerText = minRange.value;
		maxUser.innerText = maxRange.value;
		randomNumber = Math.floor(Math.random() * (parseInt(maxRange.value) - parseInt(minRange.value)) + (parseInt(minRange.value)));
		}

function resetGame() {
	clearForms();
	updateRangeValue(event);
	scoreHistory.innerHTML = "";
}

function clearForms() {
	inputGuessOne.value = "";
	inputGuessTwo.value = "";
}

// change the set range to what the users input


// Change the challenger names and guess numbers to what the users input
function submitGuesses() {
 playerNameTwo.innerText = inputNameTwo.value;
 playerNameOne.innerText = inputNameOne.value;
 guessDisplayOne.innerHTML = inputGuessOne.value;
 guessDisplayTwo.innerHTML = inputGuessTwo.value;
 winnerOne();
 winnerTwo();
};

function enableUpdateButton() {
	if(minRange.value.length === 0 && maxRange.value.length === 0 || minRange.value.length === 0 || maxRange.value.length === 0 ) {
		rangeButton.disabled = true;
	} else { 
		rangeButton.disabled = false;
	}
}

function disableButtons() {
	if(inputGuessOne.value.length === 0 && inputGuessTwo.value.length === 0 || inputGuessTwo.value.length === 0 || inputGuessOne.value.length === 0) {
		clearButton.disabled = true;
		resetButton.disabled = true;
	} else {
		clearButton.disabled = false;
		resetButton.disabled = false;
	} 
}

// let the users play and guess the correct number
// player 1
function winnerOne() {
if (inputGuessOne.value == randomNumber) {	 
	guessMessageOne.innerHTML = correctGuess
	clearForms();
	updateRangeValue(event);
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
	clearForms();
	updateRangeValue(event);
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





