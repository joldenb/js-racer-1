//Selecting element by ID: 'box-one' and 'box-two' 
let goatOne = document.getElementById('box-one');
let goatTwo = document.getElementById('box-two');

//Defining two variables that start at 0px
let goatOneLeft = 0;
let goatTwoLeft = 0;


const goatsGo = (event) => {

	//creating an if statement to detect which key is being pushed down with the event.keyCode
	//event.keyCode references to the right arrow key being pressed
	if (event.keyCode === 39) {
	//taking initial value of goatOneLeft at 0 and adding 10px 
		goatOneLeft += 10;
	//selecting the goatOne object and apply style.left allows goatOneLeft to concatenate the 10px from previous line	and move 10px away from the left
		goatOne.style.left = goatOneLeft + "px";
			//if statement that stops goatOneLeft at 900px in the field div and alerts that is has won 
			if (goatOneLeft >= 900) 
			alert("White goat for the win!"); 
	}
	//creating an if statement to detect which key is being pushed down with the event.keyCode
	//event.keyCode references to the 'q' key being pressed
	if (event.keyCode === 81) {
	//taking initial value of goatTwoLeft at 0 and adding 10px 
		goatTwoLeft += 10;
	//selecting the goatTwo object and apply style.left allows goatTwoLeft to concatenate the 10px from previous line	and move 10px away from the left
		goatTwo.style.left = goatTwoLeft + "px";
		if (goatTwoLeft >= 900) 
			alert("Black goat for the win!"); 
	} else {

	}
};
//Calling the goatsGo function everytime the right arrow key and 'q' key is pressed down
document.onkeydown = goatsGo;













