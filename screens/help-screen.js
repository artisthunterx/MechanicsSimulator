var helpScreen = {};

window.addEventListener('load', function() {

	var backButtonDiv = document.getElementById('back-button');
//if the div is seleted by clicking it moves to the vehicle select screen
	backButtonDiv.addEventListener('click', function() {
		program.goToStartScreen();
	});

	helpScreen.show = function() {// shows the help screen div

	};
});