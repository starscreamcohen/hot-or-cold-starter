// Global Variables
var _answer;
var _currentguess;
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
    $('#guessList').append(_currentguess);

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


// newGame begins when page loads or user clicks New Game Button
// create function userFeedback using set ranges, 1-10 = extremely hot, 11-20 = warm, 21-50 = cold, 51-100 = freezing
// the feedback should appear in Div#feedback, replacing Make Your Guess
// Create function guessHistory and attach to #guessList
// Create a regular expression for input that only allows them to guess 1-100
