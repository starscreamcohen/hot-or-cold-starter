// Global Variables
var _answer;
var _currentguess;
var _lastnumber;
var _secondtolastnumber;
var _hotorcold;
var _guessnumber = 0;
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

  $('.new').on('click', function(event){
    event.preventDefault();
    newGame();
  });
  
  $('#guessButton').on('click', function(event){
    event.preventDefault();
    userInputGuess();
    addToGuessList();
    userFeedback();
  });

//delay second keyup event

  $('#userGuess').keyup(function(event) {
    if (event.keycode == 13) {
      userInputGuess(); 
      addToGuessList();
      userFeedback();
    }
  });
});

// Create function newGame () {}
function newGame() {
  _answer = randomNumber();
  eraseGuessList();
  resetguessNotification();
}

function eraseGuessList() {
  $('#guessList').children('li').remove();
}

function resetguessNotification() {
  $('#feedback').text('').append('Make your Guess!');
}


// create a function randomNumber to create a number 1-100 that is chosen for function newGame  
// Store the number
// Check to Make sure it persists
function randomNumber() {
	return Math.floor((Math.random() * 100) + 1); 
}


var guessHistory = new Array();

function userInputGuess() {
  //if (_lastnumber.match(/^\d+$/)) {
    _currentguess = document.getElementById('userGuess');
    guessHistory.push(parseInt(_currentguess.value));
    clearInput();
    return true; 
  //}
  //else {
    //alert("We only play with numbers here");
  //}
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

function userWarmOrCold() {
  if (lastNumberOfArray() === _answer) {
    return "Congrats " + _answer + " was the number"
    newGame();
  }
  else if (guessHistory.length === 1) {
    if (lastNumberOfArray() <=5) {
      return "You are hot!";
    }
    else if (lastNumberOfArray() <= 15) {
      return "You are warm!";
    }
    else if (lastNumberOfArray() <= 25) {
      return "You are chilly!";
    }
    else if (lastNumberOfArray() <= 50) {
      return "You are cold!";
    }
    else {
      return "You are freezing!";
    }
  }
  
  else if (lastNumberToAnswer() <= 5) {
  _hotorcold = "Hot";
   if (lastNumberToAnswer() < secondNumberToAnswer()) {
      return _hotorcold + " And Getting Warmer"
   }
   else {
      return _hotorcold + " But Getting Colder";
   }
  }
  else if (lastNumberToAnswer() <= 15) {
   _hotorcold = "Warm";
   if (lastNumberToAnswer() < secondNumberToAnswer()) {
       return _hotorcold + " And Getting Warmer";
   }
   else {
      return _hotorcold + " But Getting Colder";
   }
  }
  else if (lastNumberToAnswer() <= 25) {
   _hotorcold = "Chilly";
   if (lastNumberToAnswer() < secondNumberToAnswer()) {
     return _hotorcold + " But Getting Warmer";
   }
   else {
      return  _hotorcold + " And Getting Colder";
   }
  }
  else if (lastNumberToAnswer() <= 50) {
    _hotorcold = "Cold";
    if (lastNumberToAnswer() < secondNumberToAnswer()) {
      return _hotorcold + " But Getting Warmer";
   }
   else {
      return _hotorcold + " And Getting Colder";
   }
  }
  else {
    _hotorcold = "Freezing";
    if (lastNumberToAnswer() < secondNumberToAnswer()) {
      return _hotorcold + " But Getting Warmer";
   }
   else {
      return _hotorcold + " And Getting Colder";
   }
  }
}

function userFeedback() {
  $('#feedback').text('').append(userWarmOrCold());

}

function addToGuessList() {
  $('#guessList').append('<li>' + lastNumberOfArray() + '</li>');
}


// newGame begins when page loads or user clicks New Game Button
// the feedback should appear in Div#feedback, replacing Make Your Guess
// Create function guessHistory and attach to #guessList
// Create a regular expression for input that only allows them to guess 1-100
