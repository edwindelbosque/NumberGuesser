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

// var numbers = [from 1, to 100];

//     // random value generated 
//     var y = Math.floor(Math.random() * 10 + 1); 
      
//     // counting the number of guesses 
//     // made for correct Guess 
//     var guess = 1; 
      
//     document.getElementById("submitguess").onclick = function(){ 
      
//     // number guessed by user      
//     var x = document.getElementById("guessField").value; 
  
//    if(x == y) 
//    {     
//        console.log(winningPlayer)
//                + guess + " GUESS "; 
//    } 
//    else if(x > y) /* if guessed number is greater 
//                    than actual number*/ 
//    {     
//        guess++; 
//        alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
//    } 
//    else
//    { 
//        guess++; 
//        alert("OOPS SORRY!! TRY A GREATER NUMBER")
//    } 
// };