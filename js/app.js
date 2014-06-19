
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


Game = {

}

// Create function newGame () {}
// create a function randomNumber to create a number 1-100 that is chosen for function newGame  
// newGame begins when page loads or user clicks New Game Button
// create function userFeedback using set ranges, 1-10 = extremely hot, 11-20 = warm, 21-50 = cold, 51-100 = freezing
// the feedback should appear in Div#feedback, replacing Make Your Guess
// Create function guessHistory and attach to #guessList
// Create a regular expression for input that only allows them to guess 1-100
