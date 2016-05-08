var startScreen = {};

window.addEventListener('load', function() {
    //retrieves that div to start the game 
	var startButtonDiv = document.getElementById('start-button');
	var helpButtonDiv = document.getElementById('help-button');

	//if the div is seleted by clicking it moves to the vehicle select screen
	startButtonDiv.addEventListener('click', function() {
		program.goToVehicleSelectScreen();
	});

	helpButtonDiv.addEventListener('click', function() {
		program.goToHelpScreen();
	});

	startScreen.show = function() {// shows the start screen div

	};
});