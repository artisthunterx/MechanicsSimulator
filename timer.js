var timer = {};
//timer is an inbuilt object of java script that i am using to create a timer counter visual
timer.startTimer = function(timerElement, secondsRemaining, timerEndedCallback) {
	function updateTimerElement() {
        //minutes defined the amount of time left divided by 60 rounded to a whole number
		var minutes = Math.floor(secondsRemaining / 60);
        //seconds defined as the modulus of amount of time left
		var seconds = secondsRemaining % 60;
//the term inner html allows us to direrctly output to the document
		if (seconds == 0) {
			timerElement.innerHTML = minutes + ':00';
		} else if (seconds < 10) {
            //if second is defined as less than 10 then we output minutes and the concatenated ':0' long with 'seconds'
			timerElement.innerHTML = minutes + ':0' + seconds;
		} else {
            //if second is defined as greater than 10 then we output minutes and the concatenated ':' and the concatenated seconds 
			timerElement.innerHTML = minutes + ':' + seconds;
		}
	}

	var interval = window.setInterval(function() {
        //condition, when timer ends clear the screen return that the timer has finished 
		if (secondsRemaining == 1) {
			window.clearInterval(interval);
			timerEndedCallback();
		} else {
            //decrement seconds remainining so that the timer reaches 0 to satisfy first condition
			secondsRemaining -= 1;
			updateTimerElement();
		}
	}, 1000);//speed of timer== tenth of a second

	updateTimerElement();

	return function() {
		window.clearInterval(interval);
		return secondsRemaining;
        //returns seconds remaining to the update timer element
	};
};