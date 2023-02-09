export const data = [
    {text: `Globals`, element: `h3`, class: 'text-2xl'},
    
    {text: `Global variables and functions are **bad** and should be avoided. The reason is, they could make your code unpredictable. Global variables could cause bugs in big projects because they could be modified accidentaly
	from anywhere.`, element: `p`},
    {text: `Testing becomes more difficult, because globals could be very tight coupled to the code.`, element: `p`},
    {text: `One way to solve this problem is `, element: `p`},
    {text: `Magic numbers`, element: `h3`, class: 'text-2xl'},
    {text: `A magic number is a value which meaning is not clear, this is an anti-pattern and should be avoided, as it hides the purpose of the number and could lead to bugs.
	The solution to this problem is to replace all magic numbers with named constants, so that the code would be more readable as well as easier to maintain.`, element: `p`},
    {text: `function doAIMove() {
		// Randomly gets a number from 1 to 9 (Board size)
		var randomSquare = document.getElementById("k" + getRandomInt(9));
		while (randomSquare.value != " ") {
			randomSquare = document.getElementById("k" + getRandomInt(9));
		}
		return randomSquare.value;
	}
	
	function doAIMove() {
		// Randomly gets a number from 1 to 9 (Board size)
		const BOARD_SIZE = 9;
		var randomSquare = document.getElementById("k" + getRandomInt(BOARD_SIZE));
		while (randomSquare.value != " ") {
			randomSquare = document.getElementById("k" + getRandomInt(BOARD_SIZE));
		}
		return randomSquare.value;
	}`, element: `code`, language: `javascript`},
    {text: `Hello`, element: `p`},
]
