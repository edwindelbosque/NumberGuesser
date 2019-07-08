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
var tooLow = "that's too low"
var tooHigh = "that's too high"
var correctGuess = "BOOM! "
var scoreHistory = document.querySelector(".section-right");

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
			scoreHistory.innerHTML += scoreHistoryContent;
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
			scoreHistory.innerHTML += scoreHistoryContent2;
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


// scoreHistory.innerHTML += scoreHistoryContent;

var scoreHistoryContent = `<article id="results" class="article-right">
	  			<header>
		  			<p><strong id="player-name-one">${inputNameOne.value}</strong></p>
		  			<p>VS</p>
		  			<p><strong id="player-name-two">${playerNameTwo}</strong></p>
		  		</header>
		  		<article>
		  			<h3>${playerNameOne}</h3>
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
		  		</footer></article>`

var scoreHistoryContent2 = `<article id="results" class="article-right">
	  			<header>
		  			<p><strong id="player-name-one">${inputNameOne.value}</strong></p>
		  			<p>VS</p>
		  			<p><strong id="player-name-two">${playerNameTwo}</strong></p>
		  		</header>
		  		<article>
		  			<h3>${playerNameTwo}</h3>
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
		  		</footer></article>`