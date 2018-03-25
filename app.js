//Selecting element: car-one
let carOne = document.getElementById('box-one');


//Adding event listener to car-one


const checkKeyPressed = (key) => {
	if (key.keyCode == '75') {
		alert("The 'k' letter key has been pressed!");
	}
};

window.addEventListener('keydown', checkKeyPressed, false);
/*


	
//These are other things that I tried that I am still trying to work on

//I used this to test that I selected element correctly
carOne.addEventListener('click', () => {
	alert("shit was clicked");
})

	if (event.keyCode === 75) {
		alert("Key 'k' was pressed down");

if (keyName === 'k') {
		alert('Key k was pressed down');
	}
})

*/