var vehicleSelectScreen = {};

window.addEventListener('load', function() {
    //function executes when the window loads and collect the following terms from index html to be manipulated
	var vehicle1Div = document.getElementById('vehicle-1');
	var vehicle2Div = document.getElementById('vehicle-2');
	var vehicle3Div = document.getElementById('vehicle-3');
	var vehicle4Div = document.getElementById('vehicle-4');
//carrying the incline angle
	var inclineAngle;

/*listens if the divs of the html have been clicked 
if so the program moves to the backdrop select screen 
by closing the window*/
	vehicle1Div.addEventListener('click', function() {
		program.selectedVehicle = 'car';
		program.goToBackdropSelectScreen();
	});
	vehicle2Div.addEventListener('click', function() {
		program.selectedVehicle = 'truck';
		program.goToBackdropSelectScreen();
	});
	vehicle3Div.addEventListener('click', function() {
		program.selectedVehicle = 'motorcycle';
		program.goToBackdropSelectScreen();
	});
	vehicle4Div.addEventListener('click', function() {
		program.selectedVehicle = 'bicycle';
		program.goToBackdropSelectScreen();
	});

	vehicleSelectScreen.show = function() {
		
	};
});