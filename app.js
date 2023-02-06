const boardNode = document.querySelector("#board");

const screenWidth = window.screen.width;
let SQUARES_QUANTITY;

if (screenWidth > 500) {
	SQUARES_QUANTITY = 400;
} else {
	SQUARES_QUANTITY = 357;
}

for (let i = 0; i < SQUARES_QUANTITY; i++) {
	const squareNode = document.createElement("div");
	squareNode.classList.add("square");

	if (screenWidth > 500) {
		squareNode.addEventListener("mouseover", () => setColor(squareNode));
		squareNode.addEventListener("mouseleave", () => removeColor(squareNode));
	} else {
		squareNode.style.transition = "0s";
		let squareTarget;
		squareNode.addEventListener("touchstart", (event) => {
			itemMove(event);
			if (squareTarget === event.target) {
				console.log(true);
			} else {
				console.log(false);
			}
			squareTarget = event.target;
			console.log(squareTarget);
		});

		squareNode.addEventListener("touchmove", itemMove);
		// squareNode.addEventListener("touchend", itemMove);
	}

	boardNode.append(squareNode);
}
//////////////////////////////////////////////////////////////////////////////////////

let squaresNode = document.querySelectorAll(".square");

function itemMove(event) {
	event.preventDefault();
	let touch = event.targetTouches[0];
	let touchX = touch.pageX;
	let touchY = touch.pageY;

	squaresNode.forEach((square) => {
		if (
			touchY < square.getBoundingClientRect().bottom &&
			touchX > square.getBoundingClientRect().left &&
			touchY > square.getBoundingClientRect().top &&
			touchX < square.getBoundingClientRect().right
		) {
			setColor(square);
		} else {
			// removeColor(square);
		}
	});
}
//////////////////////////////////////////////////////////////////////////////////////

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = "#1d1d1d";
	element.style.boxShadow = `0 0 2px #000`;
}
