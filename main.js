var minRange = document.getElementById("minRange");
var maxRange = document.getElementById("maxRange");
var rangeButton = document.querySelector('.updateRange');
var minUser = document.querySelector('.minUser');
var maxUser = document.querySelector('.maxUser');

// create random number from the users min and max range

rangeButton.addEventListener('click', updateRangeValue);

function updateRangeValue(event){
event.preventDefault();
minUser.innerText = minRange.value;
maxUser.innerText = maxRange.value;
}

// This variables and function is to be able to change the challenger names to what the user inputs
//-----------------it only works on th code above is commented out
var submitGuess = document.querySelector("#submit-guess-button");
var playerNameOne = document.querySelector("#player-name-one");
var playerNameTwo = document.querySelector("#player-name-two");
var inputNameOne = document.querySelector("#input-name-one");
var inputNameTwo = document.querySelector("#input-name-two");

submitGuess.addEventListener("click", changeNameOne);

function changeNameOne(event) {
 event.preventDefault();
 playerNameTwo.innerHTML = inputNameTwo.value;
 playerNameOne.innerHTML = inputNameOne.value;
};
