var backdropSelectScreen = {};

window.addEventListener('load', function() {
    /*reference to all 4 backdrop div
	of the index.html 
	access by in built method document.getElementById()*/
	var backdrop1Div = document.getElementById('backdrop-1');
	var backdrop2Div = document.getElementById('backdrop-2');
	var backdrop3Div = document.getElementById('backdrop-3');
	var backdrop4Div = document.getElementById('backdrop-4');

	var inclineAngle;
/*listeneing for wwhen the backkdrop divs will be clicked 
and dependent on whats clicked, thats what will be sent to the render.js
the next question function passing it the value 90
i.e the time necessary*/
	backdrop1Div.addEventListener('click', function() {
		program.selectedBackdrop = 'mountains';
		program.goToNextQuestion(240);
	});
	backdrop2Div.addEventListener('click', function() {
		program.selectedBackdrop = 'desert';
		program.goToNextQuestion(240);
	});
	backdrop3Div.addEventListener('click', function() {
		program.selectedBackdrop = 'city';
		program.goToNextQuestion(240);
	});
	backdrop4Div.addEventListener('click', function() {
		program.selectedBackdrop = 'forest';
		program.goToNextQuestion(240);
	});

	backdropSelectScreen.show = function() {
		
	};
});