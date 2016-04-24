var failureScreen = {};
// event loading the window and executing the function
window.addEventListener('load', function() {
	var failureScreenDiv = document.getElementById('failure-screen');// reference to failiure screen div
	failureScreenDiv.addEventListener('click', function() {//listens for the click on the screen to move to start screen
		program.goToStartScreen();
	});

	failureScreen.show = function() {
		
	};
});
