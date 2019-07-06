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
