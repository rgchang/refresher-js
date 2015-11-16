/* js goes here */

var my_array = ['carrie', 'rachel', 'gloria', 'franchine', 'eric', 'ness', 'julian', 'tom'];

var body_object = document.body;
body_object.innerHTML = '<button id="btn">a button</button>'

var button_object = document.getElementById('btn');

function set_button_position(){
	body_object.parentNode.style.height = '100%';
	body_object.style.height = '100%';
	button_object.style.position = 'absolute';
	button_object.style.left = '100px';
	button_object.style.top = '100px';
	button_object.style.transform = 'translate3d(-50%, -50%, 0)'
}

set_button_position();

body_object.addEventListener('mousemove', function(evt){
	console.log(evt);
	var mouseX = evt.clientX;
	var mouseY = evt.clientY;
	console.log(mouseX + ':' + mouseY);
	btn.style.left = mouseX + 'px';
	btn.style.top = mouseY + 'px';
});

button_object.addEventListener('click', my_function);

function my_function(){
	my_array.sort();

	for(var i = 0; i < my_array.length; i++){
		//console.log(my_array[i], i);
		console.log(my_array[i].length);
	}
}