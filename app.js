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
			//if statement that stops carOneLeft at 900px in the field div and alerts that is has won 
			if (carOneLeft >= 900) 
			alert("White goat for the win!"); 
	}
	//creating an if statement to detect which key is being pushed down with the event.keyCode
	//event.keyCode references to the 'q' key being pressed
	if (event.keyCode === 81) {
	//taking initial value of carTwoLeft at 0 and adding 10px 
		carTwoLeft += 10;
	//selecting the carTwo object and apply style.left allows carTwoLeft to concatenate the 10px from previous line	and move 10px away from the left
		carTwo.style.left = carTwoLeft + "px";
		if (carTwoLeft >= 900) 
			alert("Black goat for the win!"); 
	}
};
//Calling the goatsGo function everytime the right arrow key and 'q' key is pressed down
document.onkeydown = goatsGo;













