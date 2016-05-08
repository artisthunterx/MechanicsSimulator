var program = {};
//loads the window and executes the function within
window.addEventListener('load', function() {
/*
the function holds a bunch of inner fuctions that will be described further down 
the variables beneath these are tags obtained from the index.html
*/
	var startScreenDiv = document.getElementById('start-screen');
	var vehicleSelectScreenDiv = document.getElementById('vehicle-select-screen');
	var backdropSelectScreenDiv = document.getElementById('backdrop-select-screen');
	var regularQuestionScreenDiv = document.getElementById('regular-question-screen');
	var graphQuestionScreenDiv = document.getElementById('graph-question-screen');
	var failureScreenDiv = document.getElementById('failure-screen');
	var successScreenDiv = document.getElementById('success-screen');
	var helpScreenDiv = document.getElementById('help-screen');

	var leave = (function(){});//this is a function executed when we need to close/edit a window or canvas of somekind

	var questions;
	var counter;
//adding the audio from folder to the game 
	var audio = new Audio('game-music.mp3');
	audio.play();
	audio.loop = true;//looping when song finishes

	program.goToStartScreen = function() {
		leave();

		// Set up questions by initisaliation of variables
		questions = [];
		counter = 0;

		var unansweredQuestions = questionGenerators.slice(); // makes a copy of the question generators
		for (var i = 0; i < 4; i++) {
			var randno = Math.floor(Math.random() * unansweredQuestions.length);
			questions.push(unansweredQuestions[randno]);
			unansweredQuestions.splice(randno, 1);
		}

		// Set up random incline angle
		var incline = Math.floor(Math.random() * 35) + 10;
		program.inclineAngle = incline;
/*
the following functions exist to manipulate what is seen by the user in the HTML 
the canvases and texts are split into canvii an divs that can be controlled by the javva scrpit assignment syntax
every 'block' and 'none' allows for one screen to close and another on to open and hinders on the funtion leave, that can be repurpsed or used ass
an initialiser for the function
*/
		startScreen.show();
		startScreenDiv.style.display = 'block';//the text 'block' is an indicator to the html that it should handle the canvas as beng seen, this applies to all versions of thsi
		leave = function() {
			startScreenDiv.style.display = 'none';//the text'none' is an indicator to the html that it should handle the canvas as not being seen
		};
	};

	program.goToVehicleSelectScreen = function() {
		leave();

		vehicleSelectScreen.show();
		vehicleSelectScreenDiv.style.display = 'block';

		leave = function() {
			vehicleSelectScreenDiv.style.display = 'none';
		};
	};

	program.goToBackdropSelectScreen = function() {
		leave();

		backdropSelectScreen.show();
		backdropSelectScreenDiv.style.display = 'block';

		leave = function() {
			backdropSelectScreenDiv.style.display = 'none';
		};
	};

	program.goToRegularQuestionScreen = function(questionNumber, question, secondsRemaining) {
		leave();

		regularQuestionScreen.show(questionNumber, question, secondsRemaining);
		regularQuestionScreenDiv.style.display = 'block';

		leave = function() {
			regularQuestionScreenDiv.style.display = 'none';
		};
	};

	program.goToGraphQuestionScreen = function(questionNumber, question, secondsRemaining) {
		leave();

		graphQuestionScreen.show(questionNumber, question, secondsRemaining);
		graphQuestionScreenDiv.style.display = 'block';

		leave = function() {
			graphQuestionScreenDiv.style.display = 'none';
		};
	};

	program.goToNextQuestion = function(secondsRemaining) {//a function that allows question progession after a question  has been answered
		if (counter == 4) {//when 4 questions have been aswerd it will to take the user to the success screen
			program.goToSuccessScreen();
		} else {
			var questionGenerator = questions[counter];
			var question = questionGenerator(program.selectedVehicle, program.selectedBackdrop, program.inclineAngle);//passes generated relevant information to the function that generates questions
			if (question.questionType == 'regular') {//question type regular defind in a seperate script
				program.goToRegularQuestionScreen(counter + 1, question, secondsRemaining);
			} else {//graph question defined in a seperate script
				program.goToGraphQuestionScreen(counter + 1, question, secondsRemaining);
			}

			counter += 1;// increment counter after we've moved to the next question
		}
	};

	program.goToFailureScreen = function() {// function that is executed when time is up
		leave();

		failureScreen.show();
		failureScreenDiv.style.display = 'block';

		leave = function() {
			failureScreenDiv.style.display = 'none';
		};
	};

	program.goToSuccessScreen = function() {// function that is executed when all 4 questions are answered
		leave();

		successScreen.show();
		successScreenDiv.style.display = 'block';

		leave = function() {
			successScreenDiv.style.display = 'none';
		};
	};

	program.goToHelpScreen = function() {
		leave();

		helpScreen.show();
		helpScreenDiv.style.display = 'block';

		leave = function() {
			helpScreenDiv.style.display = 'none';
		};
	};

	program.goToStartScreen();// return to srart screen when game is finished 
});