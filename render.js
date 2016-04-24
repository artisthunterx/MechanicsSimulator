function renderSimulation(canvas, selectedVehicle, selectedBackdrop, inclineAngle, positionAlongSlope) {
	var width = canvas.width;
	var height = canvas.height;

	var context = canvas.getContext('2d');

	// 1. Draw back drop
	var backdropImage = graphics[selectedBackdrop];
	context.drawImage(backdropImage, 0, 0, width, height);

	// 2. Translate and rotate the context
	context.save();
	context.translate(width / 2, height / 2);
	context.rotate(- inclineAngle * Math.PI/180);

	// 3. Draw incline
	var inclineImage = graphics[selectedBackdrop + 'Incline'];
	context.drawImage(inclineImage, - width, - 0.55 * height, 2 * width, 1.5 * height);

	// 4. Draw vehicle
	var vehicleImage = graphics[selectedVehicle];
	context.translate(width * 0.45 - positionAlongSlope * width * 0.9, 0);
	context.drawImage(vehicleImage, - 0.15 * width, - 0.15 * height, 0.3 * width, 0.1 * height);

	// 5. Restore the context
	context.restore();
}