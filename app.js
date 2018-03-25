//Selecting element by ID: 'box-one' and 'box-two' 
let carOne = document.getElementById('box-one');
let carTwo = document.getElementById('box-two');

//Defining two variables that start at 0px
let carOneLeft = 0;
let carTwoLeft = 0;


const goatsGo = (event) => {

	//creating an if statement to detect which key is being pushed down with the event.keyCode
	//event.keyCode references to the right arrow key being pressed
	if (event.keyCode === 39) {
	//taking initial value of carOneLeft at 0 and adding 10px 
		carOneLeft += 10;
	//selecting the carOne object and apply style.left allows carOneLeft to concatenate the 10px from previous line	and move 10px away from the left
		carOne.style.left = carOneLeft + "px";
	}
	//creating an if statement to detect which key is being pushed down with the event.keyCode
	//event.keyCode references to the 'q' key being pressed
	if (event.keyCode === 81) {
	//taking initial value of carTwoLeft at 0 and adding 10px 
		carTwoLeft += 10;
	//selecting the carTwo object and apply style.left allows carTwoLeft to concatenate the 10px from previous line	and move 10px away from the left
		carTwo.style.left = carTwoLeft + "px";
	}
};
//Calling the carOneMove function everytime the right arrow key is pressed down
document.onkeydown = goatsGo;













/*

//These are other things that I tried that I am not sure if I want to get rid of yet

//Copy of second function
const carTwoMove = (event) => {

	//creating an if statement to detect which key is being pushed down with the event.keyCode
	//event.keyCode references to the 'q' key being pressed
	if (event.keyCode === 81) {
	//taking initial value of carTwoLeft at 0 and adding 10px 
		carTwoLeft += 10;
	//selecting the carTwo object and apply style.left allows carTwoLeft to concatenate the 10px from previous line	and move 10px away from the left
		carTwo.style.left = carTwoLeft + "px";
	}
};
//Calling the carTwoMove function everytime the 'q' key is pressed down
document.onkeydown = carTwoMove;


window.addEventListener('keydown', checkKeyPressed, false);

const checkKeyPressed = (key) => {
	if (key.keyCode == '75') {
		alert("The 'k' letter key has been pressed!");
	}
};



//I used this to test that I selected element correctly
carOne.addEventListener('click', () => {
	alert("shit was clicked");
})


*/