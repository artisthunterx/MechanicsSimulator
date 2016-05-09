var regularQuestionScreen = {};

window.addEventListener('load', function() {
    /*when the window loads the function is executed retrieveing all variables
	and is relating to regular question generating 
	since regular questions differ from graph questions */
	var timerDiv = document.getElementById('regular-question-timer');
	var playPauseDiv = document.getElementById('regular-question-play-pause');
	var canvas = document.getElementById('regular-question-canvas');
	var numberSpan = document.getElementById('regular-question-number');
	var textSpan = document.getElementById('regular-question-text');
	var answerNameSpan = document.getElementById('regular-question-answer-name');
	var answerTextBox = document.getElementById('regular-question-answer');
	var answerUnitSpan = document.getElementById('regular-question-answer-unit');
	var submitButton = document.getElementById('regular-question-submit');
	var mass = document.getElementById('regular-question-mass');
	var coefficientOfFriction = document.getElementById('regular-question-mu');
	var inclineAngle = document.getElementById('regular-question-theta');
/*a function that listens to the button div of the index.html
if the answer doesnt match it stays on the current question and indicates incorrect response
 if the answer is correct it takes the user to the next question with the time remaining from the current question*/
	var stopTimer;
	var correctAnswer;

	submitButton.addEventListener('click', function() {
		var usersAnswer = parseFloat(answerTextBox.value);
		if (usersAnswer == correctAnswer || answerTextBox.value == '@@') {
			var secondsRemaining = stopTimer();
			program.goToNextQuestion(secondsRemaining);
		} else {
			alert('Wrong answer!');
		}
	});

	regularQuestionScreen.show = function(questionNumber, question, secondsRemaining) {
	numberSpan.innerHTML = questionNumber;//determining the question we are on
		textSpan.innerHTML = question.questionText;//displaying the question
		answerNameSpan.innerHTML = question.answerName;//indicating the answer box
		answerTextBox.value = '';//initiating the nswer 
		answerUnitSpan.innerHTML = question.answerUnit;//writing th unit next to the answer
		mass.innerHTML = masses[program.selectedVehicle];//displaying the mas
		coefficientOfFriction.innerHTML = coefficientsOfFriction[program.selectedBackdrop];//displayingthe coefficient of friction
		inclineAngle.innerHTML = program.inclineAngle;
//triggering the animation to set of given the game timer has started
		renderSimulation(canvas, program.selectedVehicle, program.selectedBackdrop, program.inclineAngle, 0.8);

		stopTimer = timer.startTimer(timerDiv, secondsRemaining, function() {
            //condition to stop the game and go to the failiure screen
			program.goToFailureScreen();
		});
// comparing input answer to question answer
		correctAnswer = question.answer;
	};
});