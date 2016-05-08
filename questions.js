var questionGenerators = [];

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {
	var seconds = Math.floor(Math.random() * 10) + 1;

	var mass = masses[selectedVehicle];
	var gravity = 9.8;
	var resultantForceWithoutFriction = mass * gravity * Math.cos(inclineAngle);

	var reactionForce = mass * gravity * Math.sin(inclineAngle);
	var coefficientOfFriction = coefficientsOfFriction[selectedBackdrop];
	var frictionalForce = coefficientOfFriction * reactionForce;

	var acceleration = (resultantForceWithoutFriction - frictionalForce) / mass;

	var answer = acceleration * seconds;

	return {
		questionType: 'regular',
		questionText: 'What is the vehicles speed at ' + seconds + 's?',
		answerName: 'speed',
		answerUnit: 'm/s',
		answer: Math.round(answer * 100) / 100
	};
});

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {

	var mass = masses[selectedVehicle];
	var gravity = 9.8;

	var answer = mass * gravity * Math.cos(inclineAngle);

	return {
		questionType: 'regular',
		questionText: 'What magnitude of force is the vehicle moving down with if there was no friction?',
		answerName: 'F',
		answerUnit: 'N',
		answer: Math.round(answer * 100) / 100
	};
});

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {

	var mass = masses[selectedVehicle];
	var gravity = 9.8;
	var resultantForceWithoutFriction = mass * gravity * Math.cos(inclineAngle);

	var reactionForce = mass * gravity * Math.sin(inclineAngle);
	var coefficientOfFriction = coefficientsOfFriction[selectedBackdrop];
	var frictionalForce = coefficientOfFriction * reactionForce;

	var answer = (resultantForceWithoutFriction - frictionalForce) / mass;

	return {
		questionType: 'regular',
		questionText: 'What is the vehicle\'s acceleration?',
		answerName: 'acceleration',
		answerUnit: 'm/s/s',
		answer: Math.round(answer * 100) / 100
	};
});

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {
	return {
		questionType: 'graph',
		questionText: 'What does the area under the following graph represent?',
		answer: 'Displacement'
	};
});

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {
	return {
		questionType: 'graph',
		questionText: 'What does the gradient of the following graph represent?',
		answer: 'Acceleration'
	};
});

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {

	var answer = coefficientsOfFriction[selectedBackdrop];

	return {
		questionType: 'regular',
		questionText: 'What is the coefficient of friction for this surface?',
		answerName: 'coefficient of friction',
		answerUnit: '',
		answer: Math.round(answer * 100) / 100
	};
});

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {

	var mass = masses[selectedVehicle];
	var gravity = 9.8;

	var answer = mass * gravity * Math.sin(inclineAngle);

	return {
		questionType: 'regular',
		questionText: 'What is the reaction force of the vehicle on the surface?',
		answerName: 'R',
		answerUnit: 'N',
		answer: Math.round(answer * 100) / 100
	};
});

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {
	var seconds = Math.floor(Math.random() * 10) + 1;

	var mass = masses[selectedVehicle];
	var gravity = 9.8;
	var resultantForceWithoutFriction = mass * gravity * Math.cos(inclineAngle);

	var reactionForce = mass * gravity * Math.sin(inclineAngle);
	var coefficientOfFriction = coefficientsOfFriction[selectedBackdrop];
	var frictionalForce = coefficientOfFriction * reactionForce;

	var acceleration = (resultantForceWithoutFriction - frictionalForce) / mass;
	
	var answer = 0.5 * acceleration * seconds * seconds;

	return {
		questionType: 'regular',
		questionText: 'How far has the vehicle moved down the slope at ' + seconds + 's',
		answerName: 'distance',
		answerUnit: 'm',
		answer: Math.round(answer * 100) / 100
	};
});

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {

	var mass = masses[selectedVehicle];
	var gravity = 9.8;

	var answer = mass * gravity;

	return {
		questionType: 'regular',
		questionText: 'What\'s the weight of the vehicle?',
		answerName: 'weight',
		answerUnit: 'N',
		answer: Math.round(answer * 100) / 100
	};
});

questionGenerators.push(function(selectedVehicle, selectedBackdrop, inclineAngle) {

	var mass = masses[selectedVehicle];
	var gravity = 9.8;
	var reactionForce = mass * gravity * Math.sin(inclineAngle);

	var coefficientOfFriction = coefficientsOfFriction[selectedBackdrop];

	var answer = coefficientOfFriction * reactionForce;

	return {
		questionType: 'regular',
		questionText: 'What\'s the frictional force acting on the vehicle?',
		answerName: 'Fr',
		answerUnit: 'N',
		answer: Math.round(answer * 100) / 100
	};
});