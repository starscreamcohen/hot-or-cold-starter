// Global Variables
var _answer;
var _currentguess;
var _lastnumber;
var _secondtolastnumber;
// var _currentguess;


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);


  	});
  newGame();
  
  $('#guessButton').on('click', function(){
    userGuess();
  });

//delay second keyup event

  $('#userGuess').keyup(function(event) {
    if (event.keycode == 13) {
      userGuess(); 
    }
  });
});

// Create function newGame () {}
function newGame() {
  _answer = randomNumber();
  
}


// create a function randomNumber to create a number 1-100 that is chosen for function newGame  
// Store the number
// Check to Make sure it persists
function randomNumber() {
	return Math.floor((Math.random() * 100) + 1); 
}

var guessHistory = new Array();

function userGuess() {
  _currentguess = document.getElementById('userGuess');
    guessHistory.push(parseInt(_currentguess.value));
    clearInput();

}

function clearInput() {
  _currentguess.value='';

}
function lastNumberOfArray() {
_lastnumber = guessHistory[guessHistory.length - 1];
  return _lastnumber;
}

function secondToLast() {
_secondtolastnumber = guessHistory[guessHistory.length - 2];
  return _secondtolastnumber;
}

function lastNumberToAnswer() {
  var _absoluteguess = Math.abs(_answer - lastNumberOfArray());
   return _absoluteguess; 
}

function secondNumberToAnswer() {
  var _absoluteguess = Math.abs(_answer - secondToLast());
   return _absoluteguess; 
}

function absoluteWarmOrCold() {
  if (lastNumberToAnswer() <= 5) {
    console.log("Hot");
  }
  else if (lastNumberToAnswer() <= 15) {
    console.log("Warm");
  }
  else if (lastNumberToAnswer() <= 25) {
    console.log("Chill");
  }
  else if (lastNumberToAnswer() <= 50) {
    console.log("Cold");
  }
  else {
    console.log("Freezing");
  }
}

function userWarmerOrColder() {
  if (lastNumberToAnswer() < secondNumberToAnswer()) {
    console.log("And Getting Warmer");
  }
  else {
    console.log("But Getting Colder");
  }
}

// newGame begins when page loads or user clicks New Game Button
// create function userFeedback using set ranges, 1-10 = extremely hot, 11-20 = warm, 21-50 = cold, 51-100 = freezing
// the feedback should appear in Div#feedback, replacing Make Your Guess
// Create function guessHistory and attach to #guessList
// Create a regular expression for input that only allows them to guess 1-100
