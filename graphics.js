var graphics = {};
//occurs wgen window is loaded and will thus execute the function
window.addEventListener('load', function() {
/*
this is a script that loads images form the folder 'Graphics'
and allows them to be used in the document html to be used in the incline animation
this is useful for the visuals and can be cross referenced via the other documents of this file 
document.createElement('img') tells the index.html to leave space for laoding an image
graphics.X.src where x is defined as the image asset being refered to is  used to lad the image from the folder graphics
*/
	graphics.car = document.createElement('img');
	graphics.car.src = 'graphics/car.png';

	graphics.truck = document.createElement('img');
	graphics.truck.src = 'graphics/truck.png';

	graphics.motorcycle = document.createElement('img');
	graphics.motorcycle.src = 'graphics/motorcycle.png';

	graphics.bicycle = document.createElement('img');
	graphics.bicycle.src = 'graphics/bicycle.png';

	graphics.mountains = document.createElement('img');
	graphics.mountains.src = 'graphics/mountains.png';

	graphics.desert = document.createElement('img');
	graphics.desert.src = 'graphics/desert.png';

	graphics.city = document.createElement('img');
	graphics.city.src = 'graphics/city.png';

	graphics.forest = document.createElement('img');
	graphics.forest.src = 'graphics/forest.png';

	graphics.mountainsIncline = document.createElement('img');
	graphics.mountainsIncline.src = 'graphics/mountains-incline.png';

	graphics.desertIncline = document.createElement('img');
	graphics.desertIncline.src = 'graphics/desert-incline.png';

	graphics.cityIncline = document.createElement('img');
	graphics.cityIncline.src = 'graphics/city-incline.png';

	graphics.forestIncline = document.createElement('img');
	graphics.forestIncline.src = 'graphics/forest-incline.png';

});