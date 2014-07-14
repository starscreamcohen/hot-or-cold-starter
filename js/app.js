// Global Variables
var _answer;
var _currentguess;
var _lastnumber;
var _secondtolastnumber;
var _hotorcold;
var _guessnumber = 0;



$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $("a.play-again-button").click(function(){
      hideVictoryNotice();
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
  guessHistory = [];
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
  var currentguess = $('#userGuess').val();
  if (currentguess.match(/^\d{1,3}$/)) {
    _currentguess = document.getElementById('userGuess');
    guessHistory.push(parseInt(_currentguess.value));
    clearInput();
    return true; 
  }
  else {
    alert("We only play with numbers here");
  }
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
    var winningnumber = _answer;
    return showVictoryNotice();
  }
  else if (guessHistory.length === 1) {
    if (lastNumberToAnswer() <= 5) {
      alert("You are hot!");
    }
    else if (lastNumberToAnswer() <= 15) {
      alert("You are warm!");
    }
    else if (lastNumberToAnswer() <= 25) {
      alert("You are chilly!");
    }
    else if (lastNumberToAnswer() <= 50) {
      alert("You are cold!");
    }
    else {
      alert("You are freezing!");
    }
  }
  
  else if (lastNumberToAnswer() <= 5) {
  _hotorcold = "Hot";
   if (lastNumberToAnswer() < secondNumberToAnswer()) {
     alert(_hotorcold + " And Getting Warmer");
   }
   else {
     alert(_hotorcold + " But Getting Colder");
   }
  }
  else if (lastNumberToAnswer() <= 15) {
   _hotorcold = "Warm";
   if (lastNumberToAnswer() < secondNumberToAnswer()) {
      alert(_hotorcold + " And Getting Warmer");
   }
   else {
      alert(_hotorcold + " But Getting Colder");
   }
  }
  else if (lastNumberToAnswer() <= 25) {
   _hotorcold = "Chilly";
   if (lastNumberToAnswer() < secondNumberToAnswer()) {
     alert(_hotorcold + " But Getting Warmer");
   }
   else {
     alert(_hotorcold + " And Getting Colder");
   }
  }
  else if (lastNumberToAnswer() <= 50) {
    _hotorcold = "Cold";
    if (lastNumberToAnswer() < secondNumberToAnswer()) {
      alert(_hotorcold + " But Getting Warmer");
   }
   else {
      alert(_hotorcold + " And Getting Colder");
   }
  }
  else {
    _hotorcold = "Freezing";
    if (lastNumberToAnswer() < secondNumberToAnswer()) {
      alert(_hotorcold + " But Getting Warmer");
   }
   else {
      alert(_hotorcold + " And Getting Colder");
   }
  }
}

function userFeedback() {
  $('#feedback').text('').append(userWarmOrCold());

}

function addToGuessList() {
  $('#guessList').append('<li>' + lastNumberOfArray() + '</li>');
}

function victorySong() {
  $('#final-fantasy')[0].volume = 0.5;
    $('#final-fantasy')[0].load();
    $('#final-fantasy')[0].play();
}

function showVictoryNotice(winningnumber) {
  $(".win").fadeIn(1000);
  $('#winning-number').append(_answer);
  return victorySong();

}

function hideVictoryNotice() {
  $(".win").fadeOut(1000);
  $('#final-fantasy')[0].pause();
  return newGame();
}

// newGame begins when page loads or user clicks New Game Button
// the feedback should appear in Div#feedback, replacing Make Your Guess
// Create function guessHistory and attach to #guessList
// Create a regular expression for input that only allows them to guess 1-100
