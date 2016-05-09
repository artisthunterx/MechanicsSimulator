var graphQuestionScreen = {};

window.addEventListener('load', function() {
    /*function that executes when a window is loaded 
	picks up all the variables from the html and other scripts
	that relate to the graph question as they are different in nature to th regular question*/
	var timerDiv = document.getElementById('graph-question-timer');
	var playPauseDiv = document.getElementById('graph-question-play-pause');
	var canvas = document.getElementById('graph-question-canvas');
	var numberSpan = document.getElementById('graph-question-number');
	var textSpan = document.getElementById('graph-question-text');
	var mass = document.getElementById('graph-question-mass');
	var coefficientOfFriction = document.getElementById('graph-question-mu');
	var inclineAngle = document.getElementById('graph-question-theta');
	var stopTimer;
	var correctAnswer;

	var displacementButton = document.getElementById('graph-answer-displacement');
	var velocityButton = document.getElementById('graph-answer-velocity');
	var accelerationButton = document.getElementById('graph-answer-acceleration');
/*a function that predicates on a button being clicked 
compares the answer given withe calculated answer by the program
if correct move onto the next 
	if not stay on the current question and let the browser alert them there is a mistake */
	displacementButton.addEventListener('click', function() {
		if (correctAnswer == 'Displacement') {
			var secondsRemaining = stopTimer();
			program.goToNextQuestion(secondsRemaining);
		} else {
			alert('Wrong answer!');
		}
	});
	velocityButton.addEventListener('click', function() {
		if (correctAnswer == 'Velocity') {
			var secondsRemaining = stopTimer();
			program.goToNextQuestion(secondsRemaining);
		} else {
			alert('Wrong answer!');
		}
	});
	accelerationButton.addEventListener('click', function() {
		if (correctAnswer == 'Acceleration') {
			var secondsRemaining = stopTimer();
			program.goToNextQuestion(secondsRemaining);
		} else {
			alert('Wrong answer!');
		}
	});

	graphQuestionScreen.show = function(questionNumber, question, secondsRemaining) {
		numberSpan.innerHTML = questionNumber;//changing the question number displayed on screen
		textSpan.innerHTML = question.questionText;// displaying the question on screen
		mass.innerHTML = masses[program.selectedVehicle];//displaying mass on stage
		coefficientOfFriction.innerHTML = coefficientsOfFriction[program.selectedBackdrop];//dsiplaying coefficients of friction on stage
		inclineAngle.innerHTML = program.inclineAngle;//displaying incline angle on the stage
//signaling the animation after being triggered
		renderSimulation(canvas, program.selectedVehicle, program.selectedBackdrop, program.inclineAngle, 0.8);
//using in built function(.startTimer) to trigger when the time is up to go the failiure screen of the game
		stopTimer = timer.startTimer(timerDiv, secondsRemaining, function() {
			program.goToFailureScreen();
		});

		correctAnswer = question.answer;
	};
});